/**
 * 生成UUID（伪UUID，随机值模拟）
 */
export function uuid() {
  let seed = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
  seed = seed.replace(/x/g, function() {
    const r = Math.random() * 16 | 0;
    return r.toString(16);
  });
  seed = seed.replace('y', (Math.random() * 16 & 0x3 | 0x8).toString(16));
  return seed.replace(/-/g, '').substr(0, 24);
}

export function calcCondition(condition, data) {
  if (!condition) {
    return false;
  }
  const con = condition.replace(/([^()&|='"]+)=+/g, 'data.$1===');
  try {
    // eslint-disable-next-line no-eval
    return eval(con);
  } catch (err) {
    // console.log('[eval err]', err);
  }
  return false;
}

export function linkageShow(linkage, data) {
  if (!linkage) {
    return true;
  }
  if (linkage.type === 'shown') {
    return calcCondition(linkage.condition, data);
  }
  if (linkage.type === 'hidden') {
    return !calcCondition(linkage.condition, data);
  }
  return true;
}

export function linkageEnable(linkage, data) {
  if (!linkage) {
    return false;
  }
  if (linkage.type === 'disabled') {
    return calcCondition(linkage.condition, data);
  }
  if (linkage.type === 'enabled') {
    return !calcCondition(linkage.condition, data);
  }
  return false;
}

export function prepareRules(rules) {
  if (!rules) {
    return rules;
  }
  return rules.filter(d => d).map(d => {
    const { type, ...others } = d;
    if (type === 'required') {
      return { required: true, ...others };
    }
    return d;
  });
}

export function prepareConfig(config, source) {
  if (config.$ref) {
    return Object.assign(source.find(d => d.id === config.$ref) || {}, config);
  }
  return config;
}

export function isMobile() {
  return 'ontouchstart' in window;
}
