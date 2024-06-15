import { c as create_ssr_component, d as spread, f as escape_object, h as add_attribute, i as compute_rest_props, v as validate_component, j as each, e as escape } from "../../chunks/ssr.js";
import AutoScroll from "embla-carousel-auto-scroll";
import { parse, icon } from "@fortawesome/fontawesome-svg-core";
import { l as log } from "../../chunks/icons.js";
import { faLeaf, faTree, faGlobe } from "@fortawesome/free-solid-svg-icons";
function classList(props) {
  const {
    beat,
    fade,
    beatFade,
    bounce,
    shake,
    flash,
    spin,
    spinPulse,
    spinReverse,
    pulse,
    fixedWidth,
    inverse,
    border,
    listItem,
    flip,
    size,
    rotation,
    pull
  } = props;
  const classes = {
    "fa-beat": beat,
    "fa-fade": fade,
    "fa-beat-fade": beatFade,
    "fa-bounce": bounce,
    "fa-shake": shake,
    "fa-flash": flash,
    "fa-spin": spin,
    "fa-spin-reverse": spinReverse,
    "fa-spin-pulse": spinPulse,
    "fa-pulse": pulse,
    "fa-fw": fixedWidth,
    "fa-inverse": inverse,
    "fa-border": border,
    "fa-li": listItem,
    "fa-flip": flip === true,
    "fa-flip-horizontal": flip === "horizontal" || flip === "both",
    "fa-flip-vertical": flip === "vertical" || flip === "both",
    [`fa-${size}`]: typeof size !== "undefined" && size !== null,
    [`fa-rotate-${rotation}`]: typeof rotation !== "undefined" && rotation !== null && rotation !== 0,
    [`fa-pull-${pull}`]: typeof pull !== "undefined" && pull !== null,
    "fa-swap-opacity": props.swapOpacity
  };
  return Object.keys(classes).map((key) => classes[key] ? key : null).filter((key) => key);
}
function _isNumerical(obj) {
  obj = obj - 0;
  return obj === obj;
}
function camelize(string) {
  if (_isNumerical(string)) {
    return string;
  }
  string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
    return chr ? chr.toUpperCase() : "";
  });
  return string.substr(0, 1).toLowerCase() + string.substr(1);
}
function styleToString(style) {
  if (typeof style === "string") {
    return style;
  }
  return Object.keys(style).reduce((acc, key) => acc + key.split(/(?=[A-Z])/).join("-").toLowerCase() + ":" + style[key] + ";", "");
}
function convert(createElement, element, extraProps = {}) {
  if (typeof element === "string") {
    return element;
  }
  const children = (element.children || []).map((child) => {
    return convert(createElement, child);
  });
  const mixins = Object.keys(element.attributes || {}).reduce(
    (acc, key) => {
      const val = element.attributes[key];
      if (key === "style") {
        acc.attrs["style"] = styleToString(val);
      } else {
        if (key.indexOf("aria-") === 0 || key.indexOf("data-") === 0) {
          acc.attrs[key.toLowerCase()] = val;
        } else {
          acc.attrs[camelize(key)] = val;
        }
      }
      return acc;
    },
    { attrs: {} }
  );
  return createElement(element.tag, { ...mixins.attrs }, children);
}
function normalizeIconArgs(icon2) {
  if (icon2 && typeof icon2 === "object" && icon2.prefix && icon2.iconName && icon2.icon) {
    return icon2;
  }
  if (parse.icon) {
    return parse.icon(icon2);
  }
  if (icon2 === null) {
    return null;
  }
  if (icon2 && typeof icon2 === "object" && icon2.prefix && icon2.iconName) {
    return icon2;
  }
  if (Array.isArray(icon2) && icon2.length === 2) {
    return { prefix: icon2[0], iconName: icon2[1] };
  }
  if (typeof icon2 === "string") {
    return { prefix: "fas", iconName: icon2 };
  }
}
function objectWithKey(key, value) {
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? { [key]: value } : {};
}
const SvgElement = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tag } = $$props;
  let { props } = $$props;
  let { children } = $$props;
  let { style = null } = $$props;
  let { ref = null } = $$props;
  if (tag !== "svg") {
    throw new Error('SvgElement requires a tag of "svg"');
  }
  function processChildren(children2) {
    return children2?.reduce(
      (acc, child) => {
        return acc + (child.tag ? generateMarkup(child) : child);
      },
      ""
    ) || "";
  }
  function generateMarkup({ tag: tag2, props: props2, children: children2 }) {
    const attributes = Object.keys(props2).map((key) => `${key}="${props2[key]}"`).join(" ");
    return `<${tag2} ${attributes}>${processChildren(children2)}</${tag2}>`;
  }
  const markup = processChildren(children);
  const elementStyle = props?.style ? `${props.style}${style || ""}` : style;
  const elementProps = { ...props, style: elementStyle };
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.props === void 0 && $$bindings.props && props !== void 0)
    $$bindings.props(props);
  if ($$props.children === void 0 && $$bindings.children && children !== void 0)
    $$bindings.children(children);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  return `<svg${spread([escape_object(elementProps)], {})}${add_attribute("this", ref, 0)}><!-- HTML_TAG_START -->${markup}<!-- HTML_TAG_END --></svg>`;
});
const FontAwesomeIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "border",
    "mask",
    "maskId",
    "fixedWidth",
    "inverse",
    "flip",
    "icon",
    "listItem",
    "pull",
    "pulse",
    "rotation",
    "size",
    "spin",
    "spinPulse",
    "spinReverse",
    "beat",
    "fade",
    "beatFade",
    "bounce",
    "shake",
    "symbol",
    "title",
    "titleId",
    "transform",
    "swapOpacity",
    "ref",
    "style"
  ]);
  let { border = false } = $$props;
  let { mask = null } = $$props;
  let { maskId = null } = $$props;
  let { fixedWidth = false } = $$props;
  let { inverse = false } = $$props;
  let { flip = false } = $$props;
  let { icon: icon$1 = null } = $$props;
  let { listItem = false } = $$props;
  let { pull = null } = $$props;
  let { pulse = false } = $$props;
  let { rotation = null } = $$props;
  let { size = null } = $$props;
  let { spin = false } = $$props;
  let { spinPulse = false } = $$props;
  let { spinReverse = false } = $$props;
  let { beat = false } = $$props;
  let { fade = false } = $$props;
  let { beatFade = false } = $$props;
  let { bounce = false } = $$props;
  let { shake = false } = $$props;
  let { symbol = false } = $$props;
  let { title = "" } = $$props;
  let { titleId = null } = $$props;
  let { transform = null } = $$props;
  let { swapOpacity = false } = $$props;
  let { ref = null } = $$props;
  let { style = null } = $$props;
  const iconLookup = normalizeIconArgs(icon$1);
  const classes = objectWithKey("classes", [...classList($$props), ...($$props.class || "").split(" ")]);
  const transformObj = objectWithKey("transform", typeof transform === "string" ? parse.transform(transform) : transform);
  const maskObj = objectWithKey("mask", normalizeIconArgs(mask));
  const renderedIcon = icon(iconLookup, {
    ...classes,
    ...transformObj,
    ...maskObj,
    symbol,
    title,
    titleId,
    maskId
  });
  let result = null;
  if (!renderedIcon) {
    log("Could not find icon", iconLookup);
  } else {
    const { abstract } = renderedIcon;
    result = convert(
      (tag, props, children) => {
        return { tag, props, children };
      },
      abstract[0],
      $$restProps
    );
  }
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.mask === void 0 && $$bindings.mask && mask !== void 0)
    $$bindings.mask(mask);
  if ($$props.maskId === void 0 && $$bindings.maskId && maskId !== void 0)
    $$bindings.maskId(maskId);
  if ($$props.fixedWidth === void 0 && $$bindings.fixedWidth && fixedWidth !== void 0)
    $$bindings.fixedWidth(fixedWidth);
  if ($$props.inverse === void 0 && $$bindings.inverse && inverse !== void 0)
    $$bindings.inverse(inverse);
  if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0)
    $$bindings.flip(flip);
  if ($$props.icon === void 0 && $$bindings.icon && icon$1 !== void 0)
    $$bindings.icon(icon$1);
  if ($$props.listItem === void 0 && $$bindings.listItem && listItem !== void 0)
    $$bindings.listItem(listItem);
  if ($$props.pull === void 0 && $$bindings.pull && pull !== void 0)
    $$bindings.pull(pull);
  if ($$props.pulse === void 0 && $$bindings.pulse && pulse !== void 0)
    $$bindings.pulse(pulse);
  if ($$props.rotation === void 0 && $$bindings.rotation && rotation !== void 0)
    $$bindings.rotation(rotation);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0)
    $$bindings.spin(spin);
  if ($$props.spinPulse === void 0 && $$bindings.spinPulse && spinPulse !== void 0)
    $$bindings.spinPulse(spinPulse);
  if ($$props.spinReverse === void 0 && $$bindings.spinReverse && spinReverse !== void 0)
    $$bindings.spinReverse(spinReverse);
  if ($$props.beat === void 0 && $$bindings.beat && beat !== void 0)
    $$bindings.beat(beat);
  if ($$props.fade === void 0 && $$bindings.fade && fade !== void 0)
    $$bindings.fade(fade);
  if ($$props.beatFade === void 0 && $$bindings.beatFade && beatFade !== void 0)
    $$bindings.beatFade(beatFade);
  if ($$props.bounce === void 0 && $$bindings.bounce && bounce !== void 0)
    $$bindings.bounce(bounce);
  if ($$props.shake === void 0 && $$bindings.shake && shake !== void 0)
    $$bindings.shake(shake);
  if ($$props.symbol === void 0 && $$bindings.symbol && symbol !== void 0)
    $$bindings.symbol(symbol);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.titleId === void 0 && $$bindings.titleId && titleId !== void 0)
    $$bindings.titleId(titleId);
  if ($$props.transform === void 0 && $$bindings.transform && transform !== void 0)
    $$bindings.transform(transform);
  if ($$props.swapOpacity === void 0 && $$bindings.swapOpacity && swapOpacity !== void 0)
    $$bindings.swapOpacity(swapOpacity);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${result ? `${validate_component(SvgElement, "SvgElement").$$render(
      $$result,
      Object.assign({}, result, { style }, { ref }),
      {
        ref: ($$value) => {
          ref = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="w-full h-auto bg-[#282828] text-white flex flex-col justify-center items-center py-8 absolute left-0" style="top: 898px;"><div class="container mx-auto px-4"><div class="flex flex-wrap justify-between"> <div class="w-full md:w-1/3 mb-4 md:mb-0"><h1 class="text-lg font-bold" data-svelte-h="svelte-wnz67u">Green4Life EcoHub</h1> <p class="text-sm mt-2" data-svelte-h="svelte-rw82kq">Empowering spaces to enable communities to achieve balance.</p> <div class="mt-4"><span class="text-sm" data-svelte-h="svelte-ypcrt7">Connect with us:</span> <div class="flex space-x-3 mt-2"> <a href="#" class="text-white">${validate_component(FontAwesomeIcon, "FontAwesomeIcon").$$render($$result, { icon: faLeaf }, {}, {})}</a> <a href="#" class="text-white">${validate_component(FontAwesomeIcon, "FontAwesomeIcon").$$render($$result, { icon: faTree }, {}, {})}</a> <a href="#" class="text-white">${validate_component(FontAwesomeIcon, "FontAwesomeIcon").$$render($$result, { icon: faGlobe }, {}, {})}</a></div></div></div>  <div class="w-full md:w-2/3 flex flex-wrap justify-between space-y-4 md:space-y-0" data-svelte-h="svelte-1dcsr2n"><div class="w-1/2 md:w-auto"><h2 class="text-sm font-bold">Resources</h2> <ul class="text-sm mt-2 space-y-1"><li>Hackathons</li> <li>Collaborations</li> <li>Innovations</li></ul></div> <div class="w-1/2 md:w-auto"><h2 class="text-sm font-bold">Community</h2> <ul class="text-sm mt-2 space-y-1"><li>Mentorship</li> <li>Sustainability</li></ul></div> <div class="w-1/2 md:w-auto"><h2 class="text-sm font-bold">Empowerment</h2> <ul class="text-sm mt-2 space-y-1"><li>Information</li> <li>Opportunities</li> <li>Updates</li></ul></div> <div class="w-1/2 md:w-auto"><h2 class="text-sm font-bold">Inspiration</h2> <ul class="text-sm mt-2 space-y-1"><li>Support</li> <li>Knowledge sharing</li> <li>Awareness</li></ul></div> <div class="w-1/2 md:w-auto"><h2 class="text-sm font-bold">Connection</h2> <ul class="text-sm mt-2 space-y-1"><li>Engage</li> <li>Suggestions</li> <li>Get in touch</li></ul></div></div></div></div></footer>`;
});
const css$1 = {
  code: ".card-stack.svelte-163ydfw{perspective:1000px}.card.svelte-163ydfw{transform-style:preserve-3d;box-shadow:0 10px 16px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)}",
  map: `{"version":3,"file":"card.svelte","sources":["card.svelte"],"sourcesContent":["<script>\\r\\n    export let cards = [\\r\\n      {\\r\\n        imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',\\r\\n        title: 'Card 1',\\r\\n        description: 'This is the description for card 1',\\r\\n      },\\r\\n      {\\r\\n        imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1613&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',\\r\\n        title: 'Card 2',\\r\\n        description: 'This is the description for card 2',\\r\\n      },\\r\\n      {\\r\\n        imageUrl: 'https://images.unsplash.com/photo-1600185109987-621f937ea7d0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',\\r\\n        title: 'Card 3',\\r\\n        description: 'This is the description for card 3',\\r\\n      },\\r\\n      {\\r\\n        imageUrl: 'https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',\\r\\n        title: 'Card 4',\\r\\n        description: 'This is the description for card 4',\\r\\n      }\\r\\n      // Add more cards as needed\\r\\n    ];\\r\\n  \\r\\n    let currentIndex = 0;\\r\\n  \\r\\n    function cycleCards() {\\r\\n      currentIndex = (currentIndex + 1) % cards.length;\\r\\n    }\\r\\n  \\r\\n    setInterval(cycleCards, 4000); // Change card every 2 seconds\\r\\n  <\/script>\\r\\n  \\r\\n  <!-- <div class=\\" flex items-center gap-6 justify-center\\"> -->\\r\\n    <div class=\\"card-stack relative w-[558px] h-[348px]\\">\\r\\n      {#each cards as card, index}\\r\\n        <div\\r\\n          class=\\"card absolute w-full h-full transition-transform duration-1000\\"\\r\\n          style=\\"transform: translate(-{(index - currentIndex + cards.length) % cards.length * 20}px, {(index - currentIndex + cards.length) % cards.length * 20}px) rotateY(0deg); z-index: -{cards.length - ((index - currentIndex + cards.length) % cards.length)}\\"\\r\\n        >\\r\\n          <img src={card.imageUrl} alt={card.title} class=\\"w-full h-full object-cover rounded-lg shadow-lg\\" />\\r\\n          <div class=\\"absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-lg\\">\\r\\n            <h2 class=\\"text-white text-xl font-semibold\\">{card.title}</h2>\\r\\n            <p class=\\"text-white text-sm\\">{card.description}</p>\\r\\n          </div>\\r\\n        </div>\\r\\n      {/each}\\r\\n    </div>\\r\\n  <!-- </div> -->\\r\\n  \\r\\n  <style>\\r\\n    .card-stack {\\r\\n      perspective: 1000px;\\r\\n    }\\r\\n  \\r\\n    .card {\\r\\n      /* backface-visibility: hidden; */\\r\\n      transform-style: preserve-3d;\\r\\n      box-shadow: 0 10px 16px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);\\r\\n    }\\r\\n  </style>\\r\\n  "],"names":[],"mappings":"AAoDI,0BAAY,CACV,WAAW,CAAE,MACf,CAEA,oBAAM,CAEJ,eAAe,CAAE,WAAW,CAC5B,UAAU,CAAE,CAAC,CAAC,IAAI,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAC3E"}`
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cards = [
    {
      imageUrl: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Card 1",
      description: "This is the description for card 1"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1613&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Card 2",
      description: "This is the description for card 2"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1600185109987-621f937ea7d0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Card 3",
      description: "This is the description for card 3"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Card 4",
      description: "This is the description for card 4"
    }
  ] } = $$props;
  let currentIndex = 0;
  function cycleCards() {
    currentIndex = (currentIndex + 1) % cards.length;
  }
  setInterval(cycleCards, 4e3);
  if ($$props.cards === void 0 && $$bindings.cards && cards !== void 0)
    $$bindings.cards(cards);
  $$result.css.add(css$1);
  return ` <div class="card-stack relative w-[558px] h-[348px] svelte-163ydfw">${each(cards, (card, index) => {
    return `<div class="card absolute w-full h-full transition-transform duration-1000 svelte-163ydfw" style="${"transform: translate(-" + escape((index - currentIndex + cards.length) % cards.length * 20, true) + "px, " + escape((index - currentIndex + cards.length) % cards.length * 20, true) + "px) rotateY(0deg); z-index: -" + escape(cards.length - (index - currentIndex + cards.length) % cards.length, true)}"><img${add_attribute("src", card.imageUrl, 0)}${add_attribute("alt", card.title, 0)} class="w-full h-full object-cover rounded-lg shadow-lg"> <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-lg"><h2 class="text-white text-xl font-semibold">${escape(card.title)}</h2> <p class="text-white text-sm">${escape(card.description)}</p></div> </div>`;
  })}</div> `;
});
const css = {
  code: ".embla.svelte-1m6xav6{position:relative;width:100%;margin-top:16px}.embla__viewport.svelte-1m6xav6{overflow:hidden;width:100%}.embla__container.svelte-1m6xav6{display:flex;transition:transform 0.3s ease}.embla__slide.svelte-1m6xav6{flex:0 0 auto;padding:0 10px}.image.svelte-1m6xav6{width:280px;height:170px;-o-object-fit:cover;object-fit:cover;border-radius:10px;box-shadow:0 4px 6px rgba(0, 0, 0, 0.1)}.embla__button.svelte-1m6xav6{position:absolute;top:50%;transform:translateY(-50%);background:rgba(0, 0, 0, 0.5);border:none;color:white;width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:1}.embla__button--prev.svelte-1m6xav6{left:10px}.embla__button--next.svelte-1m6xav6{right:10px}.embla__dots.svelte-1m6xav6{text-align:center;position:absolute;width:100%}.embla__dot.svelte-1m6xav6{background:#282828;border:1px solid #fff;border-radius:1000%;margin:0 7px;cursor:pointer}.embla__dot.selected.svelte-1m6xav6{background:#91e717;opacity:50%}",
  map: `{"version":3,"file":"cards.svelte","sources":["cards.svelte"],"sourcesContent":["<script>\\r\\n  import { onMount } from 'svelte';\\r\\n  import EmblaCarousel from 'embla-carousel';\\r\\n  import AutoScroll from 'embla-carousel-auto-scroll';\\r\\n\\r\\n  let embla;\\r\\n  const options = { loop: true };\\r\\n  const plugins = [AutoScroll({ playOnInit: true, interval: 5000 })];\\r\\n  let selectedScrollSnap = 0;\\r\\n\\r\\n  let cards = [\\r\\n    { imageUrl: 'https://images.unsplash.com/photo-1529123276648-af6cfff88c20?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Image 1' },\\r\\n    { imageUrl: 'https://images.unsplash.com/photo-1600185109987-621f937ea7d0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Image 2' },\\r\\n    { imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Image 3' },\\r\\n    { imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1613&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Image 4' },\\r\\n    { imageUrl: 'https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Image 5' }\\r\\n  ];\\r\\n\\r\\n  function onInit(instance) {\\r\\n    embla = instance;\\r\\n    embla.on('select', updateSelected);\\r\\n    updateSelected();\\r\\n  }\\r\\n\\r\\n  function updateSelected() {\\r\\n    selectedScrollSnap = embla.selectedScrollSnap();\\r\\n  }\\r\\n\\r\\n  onMount(() => {\\r\\n    const emblaNode = document.querySelector('.embla');\\r\\n    const viewportNode = emblaNode.querySelector('.embla__viewport');\\r\\n    embla = EmblaCarousel(viewportNode, options, plugins);\\r\\n    embla.on('select', updateSelected);\\r\\n    updateSelected();\\r\\n  });\\r\\n\\r\\n  function scrollPrev() {\\r\\n    embla.scrollPrev();\\r\\n  }\\r\\n\\r\\n  function scrollNext() {\\r\\n    embla.scrollNext();\\r\\n  }\\r\\n\\r\\n  function scrollTo(index) {\\r\\n    embla.scrollTo(index);\\r\\n  }\\r\\n<\/script>\\r\\n\\r\\n<div class=\\"embla\\" style=\\"margin-top: -16px;\\">\\r\\n  <div class=\\"embla__viewport\\">\\r\\n    <div class=\\"embla__container\\">\\r\\n      {#each cards as card, index}\\r\\n        <div class=\\"embla__slide\\">\\r\\n          <img src={card.imageUrl} alt={card.title} class=\\"image\\" />\\r\\n        </div>\\r\\n      {/each}\\r\\n    </div>\\r\\n  </div>\\r\\n  <button class=\\"embla__button embla__button--prev\\" on:click={scrollPrev}>&#x2190;</button>\\r\\n  <button class=\\"embla__button embla__button--next\\" on:click={scrollNext}>&#x2192;</button>\\r\\n  <div class=\\"embla__dots\\">\\r\\n    {#each cards as _, index}\\r\\n      <button class=\\"embla__dot w-[2px] h-[2px] rounded-full\\" class:selected={index === selectedScrollSnap} on:click={() => scrollTo(index)}></button>\\r\\n    {/each}\\r\\n  </div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  .embla {\\r\\n    position: relative;\\r\\n    width: 100%;\\r\\n    margin-top: 16px; /* Move everything 16px closer to the top */\\r\\n  }\\r\\n  .embla__viewport {\\r\\n    overflow: hidden;\\r\\n    width: 100%;\\r\\n  }\\r\\n  .embla__container {\\r\\n    display: flex;\\r\\n    transition: transform 0.3s ease;\\r\\n  }\\r\\n  .embla__slide {\\r\\n    flex: 0 0 auto;\\r\\n    padding: 0 10px;\\r\\n  }\\r\\n  .image {\\r\\n    width: 280px;\\r\\n    height: 170px;\\r\\n    -o-object-fit: cover;\\r\\n       object-fit: cover;\\r\\n    border-radius: 10px;\\r\\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\\r\\n  }\\r\\n  .embla__button {\\r\\n    position: absolute;\\r\\n    top: 50%;\\r\\n    transform: translateY(-50%);\\r\\n    background: rgba(0, 0, 0, 0.5);\\r\\n    border: none;\\r\\n    color: white;\\r\\n    width: 40px;\\r\\n    height: 40px;\\r\\n    border-radius: 50%;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    cursor: pointer;\\r\\n    z-index: 1;\\r\\n  }\\r\\n  .embla__button--prev {\\r\\n    left: 10px;\\r\\n  }\\r\\n  .embla__button--next {\\r\\n    right: 10px;\\r\\n  }\\r\\n  .embla__dots {\\r\\n    text-align: center;\\r\\n    position: absolute;\\r\\n    /* bottom: 10px; */\\r\\n    width: 100%;\\r\\n  }\\r\\n  .embla__dot {\\r\\n    background: #282828;\\r\\n    border: 1px solid #fff;\\r\\n    border-radius: 1000%;\\r\\n    /* display: inline-block; */\\r\\n    /* height: 20px; */\\r\\n    /* width: 20px; */\\r\\n    margin: 0 7px;\\r\\n    cursor: pointer;\\r\\n  }\\r\\n  .embla__dot.selected {\\r\\n    background: #91e717;\\r\\n    opacity: 50%;\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAqEE,qBAAO,CACL,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,IACd,CACA,+BAAiB,CACf,QAAQ,CAAE,MAAM,CAChB,KAAK,CAAE,IACT,CACA,gCAAkB,CAChB,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,SAAS,CAAC,IAAI,CAAC,IAC7B,CACA,4BAAc,CACZ,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CACd,OAAO,CAAE,CAAC,CAAC,IACb,CACA,qBAAO,CACL,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,aAAa,CAAE,KAAK,CACjB,UAAU,CAAE,KAAK,CACpB,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CACzC,CACA,6BAAe,CACb,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,SAAS,CAAE,WAAW,IAAI,CAAC,CAC3B,UAAU,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAC9B,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,KAAK,CACZ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,CACX,CACA,mCAAqB,CACnB,IAAI,CAAE,IACR,CACA,mCAAqB,CACnB,KAAK,CAAE,IACT,CACA,2BAAa,CACX,UAAU,CAAE,MAAM,CAClB,QAAQ,CAAE,QAAQ,CAElB,KAAK,CAAE,IACT,CACA,0BAAY,CACV,UAAU,CAAE,OAAO,CACnB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,aAAa,CAAE,KAAK,CAIpB,MAAM,CAAE,CAAC,CAAC,GAAG,CACb,MAAM,CAAE,OACV,CACA,WAAW,wBAAU,CACnB,UAAU,CAAE,OAAO,CACnB,OAAO,CAAE,GACX"}`
};
const Cards = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  [AutoScroll({ playOnInit: true, interval: 5e3 })];
  let selectedScrollSnap = 0;
  let cards = [
    {
      imageUrl: "https://images.unsplash.com/photo-1529123276648-af6cfff88c20?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Image 1"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1600185109987-621f937ea7d0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Image 2"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Image 3"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1613&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Image 4"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Image 5"
    }
  ];
  $$result.css.add(css);
  return `<div class="embla svelte-1m6xav6" style="margin-top: -16px;"><div class="embla__viewport svelte-1m6xav6"><div class="embla__container svelte-1m6xav6">${each(cards, (card, index) => {
    return `<div class="embla__slide svelte-1m6xav6"><img${add_attribute("src", card.imageUrl, 0)}${add_attribute("alt", card.title, 0)} class="image svelte-1m6xav6"> </div>`;
  })}</div></div> <button class="embla__button embla__button--prev svelte-1m6xav6" data-svelte-h="svelte-1sthkca">←</button> <button class="embla__button embla__button--next svelte-1m6xav6" data-svelte-h="svelte-10li2p0">→</button> <div class="embla__dots svelte-1m6xav6">${each(cards, (_, index) => {
    return `<button class="${[
      "embla__dot w-[2px] h-[2px] rounded-full svelte-1m6xav6",
      index === selectedScrollSnap ? "selected" : ""
    ].join(" ").trim()}"></button>`;
  })}</div> </div>`;
});
const Strip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { message = ' "Join our mission at Green4Life Ecohubs. Together we can make a difference!". ' } = $$props;
  let { imageSrc = "https://images.unsplash.com/uploads/1413498871926cd3b6e26/ed97bcc9?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" } = $$props;
  let { name = "Tralfalgar D. Water Law" } = $$props;
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  if ($$props.imageSrc === void 0 && $$bindings.imageSrc && imageSrc !== void 0)
    $$bindings.imageSrc(imageSrc);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `  <footer class="w-full h-48 bg-[#91e717] flex flex-col items-center justify-center space-y-9 text-center absolute left-0" style="top: 714px;"><span class="text-black text-[16px] md:text-[20px]">${escape(message)}</span> <span class="flex flex-row items-center justify-center space-x-3"><img${add_attribute("src", imageSrc, 0)}${add_attribute("alt", name, 0)} class="rounded-full w-12 h-12 md:w-8 md:h-8"> <span class="text-black text-[14px] md:text-[16px]">${escape(name)}</span></span></footer>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="flex flex-col relative -20" data-svelte-h="svelte-1y5xppb"><div class="max-w-[1400px] mx-auto w-full flex items-center justify-between p-4 py-6"><a href="/"><h1 class="font-semibold text-xl ">Green4Life <span class="text-green-300">EcoHub</span></h1></a> <a href="/Discover"><button class="hover:bg-[#91e717] font-semibold rounded-3xl h-[46px] w-[140px] bg-slate-200 text-black text-sm grid place-items-center hover:text-white">Join now</button></a>  </div></header>`;
});
const Sectionwrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<section${add_attribute("id", id, 0)}${add_attribute("class", "min-h-screen flex flex-col px-4", 0)}><div class="flex-col flex-1 max-w-[1400px] mx-auto w-full">${slots.default ? slots.default({}) : ``}</div></section>`;
});
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Sectionwrapper, "Sectionwrapper").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <div class="pt-2.5 flex flex-col md:flex-row"><div class="flex flex-col pt-28 md:pt-56 gap-7 md:gap-10 flex-1 justify-center pb-10 md:pb-14 md:pl-4 font-bold md:h-[140px] md:w-[476px]" data-svelte-h="svelte-r760um"><h2 class="text-3xl sm:text-4xl md:text-6xl w-full text-center md:text-left">Unite for a <br class="hidden md:block">sustainable <span class="md:hidden">future</span></h2> <span class="md:text-xl text-center md:text-left font-semibold">Collaborate effectively to stop climate change</span> <div class="flex justify-center md:justify-start"><a href="/Discover"><button class="hover:bg-[#91e717] font-semibold rounded-3xl h-[52px] w-[178px] bg-slate-200 text-black text-lg grid place-items-center hover:text-white">Join now</button></a></div> </div>    <div class="flex justify-center mt-9 pr-3 pt-1 md:pt-0 w-full md:w-auto"> <div class="pt-4 hidden md:block w-full">${validate_component(Card, "CARD").$$render($$result, { class: "w-full h-auto pt-4 pr-3" }, {}, {})} </div> <div class="block md:hidden w-auto">${validate_component(Cards, "CARDS").$$render($$result, { class: "" }, {}, {})}</div></div></div> ${validate_component(Strip, "Strip").$$render($$result, {}, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}    `;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="flex flex-col">${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}  </main>`;
});
export {
  Page as default
};
