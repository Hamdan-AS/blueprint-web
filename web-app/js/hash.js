export function sha256Hex(value) {
  const text = unescape(encodeURIComponent(String(value)));
  const words = [];
  const bitLength = text.length * 8;
  const maxWord = 2 ** 32;
  const initial = sha256Hex.initial || [];
  const constants = sha256Hex.constants || [];
  let count = constants.length;
  if (!count) {
    const composite = {};
    for (let candidate = 2; count < 64; candidate++) {
      if (composite[candidate]) continue;
      for (let i = candidate * candidate; i < 313; i += candidate) composite[i] = true;
      initial[count] = (candidate ** 0.5 * maxWord) | 0;
      constants[count++] = (candidate ** (1 / 3) * maxWord) | 0;
    }
    sha256Hex.initial = initial;
    sha256Hex.constants = constants;
  }
  const message = text + '\x80';
  for (let i = 0; i < message.length; i++) words[i >> 2] |= message.charCodeAt(i) << ((3 - i) % 4) * 8;
  words[((message.length + 8) >> 6) * 16 + 15] = bitLength;
  let state = initial.slice(0, 8);
  for (let offset = 0; offset < words.length; offset += 16) {
    const old = state.slice();
    const w = [];
    for (let i = 0; i < 64; i++) {
      const w15 = w[i - 15];
      const w2 = w[i - 2];
      const a = state[0];
      const e = state[4];
      const word = i < 16 ? words[offset + i] | 0 : (w[i - 16]
        + ((w15 >>> 7 | w15 << 25) ^ (w15 >>> 18 | w15 << 14) ^ w15 >>> 3)
        + w[i - 7] + ((w2 >>> 17 | w2 << 15) ^ (w2 >>> 19 | w2 << 13) ^ w2 >>> 10)) | 0;
      w[i] = word;
      const temp1 = state[7] + ((e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7))
        + ((e & state[5]) ^ (~e & state[6])) + constants[i] + word;
      const temp2 = ((a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10))
        + ((a & state[1]) ^ (a & state[2]) ^ (state[1] & state[2]));
      state = [(temp1 + temp2) | 0, state[0], state[1], state[2],
        (state[3] + temp1) | 0, state[4], state[5], state[6]];
    }
    for (let i = 0; i < 8; i++) state[i] = (state[i] + old[i]) | 0;
  }
  return state.map((word) => (word >>> 0).toString(16).padStart(8, '0')).join('');
}

export function blockId(label, course) {
  return sha256Hex(`${label}|${course || '-'}`).slice(0, 12);
}
