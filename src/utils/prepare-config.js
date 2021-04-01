export function prepareComponents(components) {
  if (!components) {
    return components;
  }
  return components.map(prepareComponent);
}

export function prepareComponent(component) {
  if (typeof component === 'string') {
    const [type, title, tag] = component.split('|');
    return { type, title, tag };
  }
  const args = component.type.split('|');
  if (args.length > 1) {
    const [type, title, tag] = args;
    return {
      title,
      tag,
      ...component,
      components: prepareComponents(component.components),
      options: prepareOptions(component.options),
      type
    };
  }
  return {
    ...component,
    components: prepareComponents(component.components),
    options: prepareOptions(component.options),
  };
}

export function prepareMapping(mapping, reference) {
  const res = {};
  for (let type in mapping) {
    res[type] = mapping[type].map(d => {
      if (typeof d === 'string') {
        return reference[d] || prepareComponent(d);
      }
      return prepareComponent(d);
    });
  }
  return res;
}

export function prepareOptions(options) {
  if (!options) {
    return [];
  }
  if (typeof options === 'string') {
    options = options.split('|');
  }
  return options.map(option => {
    if (typeof option === 'string') {
      option = option.split(':');
    }
    if (Array.isArray(option)) {
      return { key: option[0], value: option[1] || option[0] };
    }
    return option;
  });
}

export default function prepareConfig(config) {
  const reference = Object.entries(config.reference).reduce((p, n) => {
    p[n[0]] = prepareComponent(n[1]);
    return p;
  }, {});

  return {
    ...config,
    components: prepareComponents(config.components),
    form: prepareComponents(config.form),
    mapping: prepareMapping(config.mapping, reference),
    reference,
  };
}
