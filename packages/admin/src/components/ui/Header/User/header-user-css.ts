import {css} from 'lit-element';
// tslint:disable-next-line no-default-export export-name
export default css`:host{position:relative;display:block;width:var(--header-height);height:var(--header-height);line-height:var(--header-height);text-align:center}:host *{vertical-align:middle}:host ui-avatar{width:50%;height:50%}:host zen-tooltip{position:absolute;top:5rem;right:1.5rem;transform:none;min-width:16rem;text-align:left;--tooltip-padding: var(--size-tiny) 0}:host zen-tooltip h5{margin:0;line-height:var(--size-main);text-transform:uppercase;color:var(--color-grey-500);letter-spacing:1px}:host zen-tooltip h5,:host zen-tooltip a{padding:0 var(--size-small)}:host zen-tooltip ul,:host zen-tooltip li{margin:0;padding:0;color:var(--color-600);list-style:none}:host zen-tooltip ul,:host zen-tooltip ul *,:host zen-tooltip li,:host zen-tooltip li *{line-height:var(--size-main)}:host zen-tooltip ul a,:host zen-tooltip li a{text-decoration:none;color:var(--color-600);padding:0 var(--size-small)}:host zen-tooltip li:hover{background:var(--color-hover)}
`;