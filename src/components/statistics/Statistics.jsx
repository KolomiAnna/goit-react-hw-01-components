import clsx from "clsx";
import PropTypes from 'prop-types';

import css from 'components/statistics/Statistics.module.css';


export default function Statistics({ title, stats }) {
    return (
        <section className={clsx(css["statistics"])}>
        {title && <h2 className={clsx(css["title"])}>{title}</h2>}
            <ul className={clsx(css["stat-list"])}>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <li className={clsx(css["item"])} key={id} style={{ backgroundColor: getRandomHexColor() }}>
                            <span className={clsx(css["label"])}>{label}</span>
                            <span className={clsx(css["percentage"])}>{percentage}%</span>
                        </li>)
                })}
            </ul>
        </section>
    );
}
    
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


Statistics.propTypes = {
    title: PropTypes.string,

    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })).isRequired,
}

















