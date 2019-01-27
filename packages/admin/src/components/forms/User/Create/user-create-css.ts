import {css} from 'lit-element';
// tslint:disable-next-line no-default-export export-name
export default css`.card{background:var(--card-bg, var(--color-white, #fff));border:var(--card-border, );border-radius:var(--card-border-radius, var(--border-radius, 0.4rem));padding:var(--card-padding, var(--size-main, 4rem));box-shadow:var(--card-shadow, var(--shadow-main-soft, 0 var(--size-tiny, 1rem) var(--size-main, 4rem) var(--color-main-soft, rgba(105,58,145,0.1))))}.card.hover{background-color:transparent;box-shadow:none;transition:all var(--transition-time)}.card.hover:hover{background-color:var(--card-bg);box-shadow:var(--card-shadow)}.font-base{font-size:var(--font-size-base)}.font-tiny{font-size:var(--font-size-tiny)}.font-small{font-size:var(--font-size-small)}.font-main{font-size:var(--font-size-main)}.font-large{font-size:var(--font-size-large)}.font-huge{font-size:var(--font-size-huge)}.font-super{font-size:var(--font-size-super)}.font-hero{font-size:var(--font-size-hero)}h1{font-size:var(--h1-font-size);font-family:var(--h1-font-family);font-weight:var(--h1-font-weight, 400);color:var(--h1-color, var(--color-text))}h2{font-size:var(--h2-font-size);font-family:var(--h2-font-family);font-weight:var(--h2-font-weight, 400);color:var(--h2-color, var(--color-text))}h3{font-size:var(--h3-font-size);font-family:var(--h3-font-family);font-weight:var(--h3-font-weight, 400);color:var(--h3-color, var(--color-text))}h4{font-size:var(--h4-font-size);font-family:var(--h4-font-family);font-weight:var(--h4-font-weight, 400);color:var(--h4-color, var(--color-text))}h5{font-size:var(--h5-font-size);font-family:var(--h5-font-family);font-weight:var(--h5-font-weight, 400);color:var(--h5-color, var(--color-text))}a,wc-link{text-decoration:none;cursor:pointer;color:var(--color-main)}p{line-height:2;margin-bottom:var(--size-small)}p:last-child{margin-bottom:0}small{font-size:var(--fs-small)}strong{font-weight:700;letter-spacing:1px}i{font-style:italic}.error{color:var(--color-error)}h2,h3{margin-bottom:var(--size-small)}:host .card{max-width:48rem}
`;
