import {css} from 'lit-element';
// tslint:disable-next-line no-default-export export-name
export default css`:host{background:var(--card-bg, var(--color-white, #fff));border:var(--card-border, );border-radius:var(--card-border-radius, var(--border-radius, 0.4rem));padding:var(--card-padding, var(--size-main, 4rem));box-shadow:var(--card-shadow, var(--shadow-main-soft, 0 var(--size-tiny, 1rem) var(--size-main, 4rem) var(--color-main-soft, rgba(105,58,145,0.1))))}:host .content{margin-left:calc(-1 * var(--size-small));margin-right:calc(-1 * var(--size-small))}:host header,:host footer{margin:calc(-1 * var(--size-main))}:host .content,:host footer{padding-left:var(--size-small);padding-right:var(--size-small)}:host{position:relative;z-index:101;max-height:calc(100vh - 2 * var(--size-main));overflow:hidden;box-sizing:border-box}:host,:host *{box-sizing:border-box}:host header{margin-bottom:0;display:flex;align-items:center;padding:var(--size-small) var(--size-main);height:var(--size-huge)}:host header h1,:host header h2,:host header h3{margin:0}:host header zen-icon[type='cross']{margin-left:auto;transform:translateX(var(--size-small));cursor:pointer}:host header .icon{transform:translateX(calc(-1 * var(--size-small)))}:host .content{overflow-y:auto;padding-bottom:var(--size-small);max-height:calc(100vh - 2 * var(--size-main) - var(--size-huge) - var(--size-huge))}:host footer{display:flex;margin-top:0;height:var(--size-huge);background-color:var(--color-grey-200);align-items:center;justify-content:flex-end}
`;
