import {css} from 'lit-element';
// tslint:disable-next-line no-default-export export-name
export default css`:host .wrapper ul.apps a small{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}:host{position:absolute;top:0;left:0;width:100%;height:100%}:host .wrapper ul.apps a small{margin-top:var(--size-tiny)}:host .wrapper ul.apps a{padding-top:var(--size-tiny);padding-bottom:var(--size-tiny)}:host .wrapper ul.apps a ui-app-icon{width:var(--size-large);height:var(--size-large)}@keyframes fade-up{from{opacity:0;transform:translateY(2rem)}to{opacity:1;transform:none}}:host{position:fixed;background-color:var(--color-white);text-align:center;transition:all 0.35s;z-index:-1;opacity:0;transform:translateY(1rem)}:host zen-icon[type="cross"]{position:absolute;right:var(--size-small);top:var(--size-small);animation-delay:0.1s;cursor:pointer}:host h1{display:inline-block;margin-top:calc(2.5 * var(--size-tiny))}:host h1,:host zen-icon[type="cross"],:host zen-input,:host ul.apps li,:host span.not-found{opacity:0;animation-name:fade-up;animation-fill-mode:forwards;animation-duration:0.35s;animation-timing-function:ease-out}:host span.not-found{display:inline-block;animation-duration:0.2s;color:var(--color-grey-500)}:host .wrapper{max-width:60rem;margin:auto}:host .wrapper zen-input{margin-top:var(--size-small);margin-bottom:var(--size-main);animation-delay:0.12s}:host .wrapper ul.apps{display:grid;grid-template-columns:repeat(6, 1fr);grid-gap:var(--size-small);list-style:none;padding:0}:host .wrapper ul.apps li{overflow:hidden}:host .wrapper ul.apps a{display:block;text-decoration:none}:host .wrapper ul.apps a ui-app-icon{transition:all calc(var(--transition-time) / 2)}:host .wrapper ul.apps a:hover ui-app-icon{transform:scale(1.1)}:host .wrapper ul.apps a small{display:block}:host-context([open]){z-index:999;opacity:1;transform:none}
`;
