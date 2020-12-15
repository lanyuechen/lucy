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
