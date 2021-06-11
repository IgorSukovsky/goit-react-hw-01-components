import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

const color = (item) => {
  const colorArray = ["#E74C3C", "#8E44AD", "#3498DB", "#27AE60", "#F39C12"];
  return `${colorArray[Number(item.id.replace(/[^0-9]/g, "")) % 5]}`;
};

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map((item) => (
          <li
            key={item.id}
            className={styles.item}
            style={{ backgroundColor: color(item) }}
          >
            <span className={styles.label}>{item.label}</span>
            <span className={styles.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.namber,
    })
  ),
};
