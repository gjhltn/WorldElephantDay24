import styles from "./Bottle.module.css";

const DEFAULT = {
  WIDTH: 94.5,
  HEIGHT: 258.5,
};

export const Bottle = ({
  fill,
  width = DEFAULT.WIDTH,
  height = DEFAULT.HEIGHT,
}) => (
  <div className={styles.bottle}>
    <svg width={width} height={height} viewBox="0 0 94.5 258.5">
      <g>
        <path
          className={`${styles.outline} ${fill === 4 ? styles.fill : ""}`}
          d="M65.3,66.6c0.05,1.21,0.15,2.42,0.35,3.64c0.02,0.13,0.03,0.26,0.03,0.39
		c0,3.81-9.16,6.89-20.45,6.89c-11.3,0-20.45-3.09-20.45-6.89c0-0.13,0.01-0.26,0.03-0.39c0.2-1.21,0.3-2.43,0.35-3.64
		c-12.01,4.55-20.6,16.64-20.6,30.83v101.46v17.9c0,8.21,6.33,14.87,14.15,14.87h17.03h18.99h17.03c7.81,0,14.15-6.66,14.15-14.87
		v-17.9V97.44C85.9,83.24,77.31,71.15,65.3,66.6z"
        />
        <path
          className={`${styles.teat} ${fill === 4 ? styles.fill : ""}`}
          d="M65.66,60.52c0.02-0.13,0.03-0.26,0.03-0.39c0-2.75-4.81-5.13-11.73-6.23V13.51
		c0-4.41-3.58-7.99-7.99-7.99h-0.38c-4.41,0-7.99,3.58-7.99,7.99v40.23c-7.51,1.02-12.81,3.5-12.81,6.39c0,0.13,0.01,0.26,0.03,0.39
		c0.54,3.24,0.54,6.47,0,9.72c-0.02,0.13-0.03,0.26-0.03,0.39c0,3.81,9.16,6.89,20.45,6.89c11.3,0,20.45-3.09,20.45-6.89
		c0-0.13-0.01-0.26-0.03-0.39C65.11,67,65.11,63.77,65.66,60.52z"
        />
        <path
          className={fill === 1 ? styles.fill : ""}
          d="M4.57,179.24v19.65v17.9c0,8.21,6.33,14.87,14.15,14.87h17.03h18.99h17.03
		c7.81,0,14.15-6.66,14.15-14.87v-17.9v-19.65H4.57z"
        />
        <path
          className={fill === 2 ? styles.fill : ""}
          d="M4.57,130.51v68.38v17.9c0,8.21,6.33,14.87,14.15,14.87h17.03h18.99h17.03
		c7.81,0,14.15-6.66,14.15-14.87v-17.9v-68.38H4.57z"
        />
        <path
          className={fill === 3 ? styles.fill : ""}
          d="M4.57,97.44v101.46v17.9c0,8.21,6.33,14.87,14.15,14.87h17.03h18.99h17.03
		c7.81,0,14.15-6.66,14.15-14.87v-17.9V97.44c0-1.88-0.16-3.71-0.45-5.5H5.02C4.73,93.73,4.57,95.56,4.57,97.44z"
        />
        {fill === 4 ? (
          <>
            <ellipse
              className={styles.ellipse}
              cx="44.18"
              cy="229.43"
              rx="25"
              ry="24.75"
            />
            <polyline
              className={styles.tick}
              points="28.36,228.73 41.93,241.31 58,217.56 	"
            />
          </>
        ) : null}
      </g>
    </svg>
  </div>
);
