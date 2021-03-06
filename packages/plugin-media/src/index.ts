import { error, Origami, Server } from '@origami/core';
import Media from './models/media';
import * as ProviderFilesystem from './providers/filesystem';
import * as ProviderImgur from './providers/imgur';
import * as ProviderS3 from './providers/s3';

export type ProviderTypes = 's3' | 'filesystem' | 'imgur';
export type PluginOptionsBase = {
  provider: ProviderTypes;
};

export interface PluginOptionsFileSystem extends PluginOptionsBase {
  provider: 'filesystem';
  location?: string;
}
export interface PluginOptionsS3 extends PluginOptionsBase {
  provider: 's3';
  bucket: string;
  key: string;
  secret: string;
  region: string;
}

export interface PluginOptionsImgur extends PluginOptionsBase {
  provider: 'imgur';
  clientID: string;
  clientSecret: string;
}

export type PluginOptions = PluginOptionsFileSystem | PluginOptionsS3 | PluginOptionsImgur;

export interface Provider<T> {
  initialize(options: T): any;
  handlerCreate(options: T): Origami.Server.RequestHandler;
  handlerGet(options: T): Origami.Server.RequestHandler;
  handlerDelete(options: T): Origami.Server.RequestHandler;
}

export interface MediaResource {
  id: string;
  type: string;
}

// @ts-ignore
export interface MediaPostReq extends Origami.Server.Request {
  files?: {
    [key: string]: {
      name: string;
      mimetype: string;
      provider?: string;
      data: Buffer;
    };
  };
}

module.exports = async (server: Server, options: PluginOptions) => {
  if (!server.store) {
    error('Plugin media requires a store to function');
    return;
  }
  let provider: Provider<PluginOptions>;
  switch (options.provider) {
    case 's3':
      provider = ProviderS3;
      break;

    case 'filesystem':
      provider = ProviderFilesystem;
      break;

    case 'imgur':
      provider = ProviderImgur;
      break;

    default:
      throw new Error(
        `Media provider ${
          (options as PluginOptions).provider
        } is not valid. Please use 's3' or 'filesystem'`
      );
  }

  await provider.initialize(options);

  server.resource('media', {
    model: Media,
    auth: {
      list: true,
      create: true,
      update: true,
      delete: true,
      get: false
    },
    controllers: {
      create: provider.handlerCreate(options),
      get: provider.handlerGet(options),
      delete: provider.handlerDelete(options)
    }
  });
};
