import resolve from 'rollup-plugin-pnp-resolve';
import typescript from 'rollup-plugin-typescript2';
import packageJSON from './package.json' assert { type: 'json' };

const input = 'src/index.ts';
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const external = (input) => {
  const externals = Object.keys({
    ...packageJSON.dependencies,
    ...packageJSON.peerDependencies,
  });

  return externals.some((externalPkg) => {
    return input.startsWith(externalPkg);
  });
};

function buildJS(input, output, format) {
  return {
    external,
    input,
    output: {
      file: output,
      format,
    },
    plugins: [resolve({ extensions }), typescript({ tsconfigOverride: { exclude: ['test'] } })],
  };
}

export default [buildJS(input, packageJSON.main, 'cjs'), buildJS(input, packageJSON.module, 'es')];
