import clsx from 'clsx';
import PropTypes from 'prop-types';

import css from 'components/TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
    return (
        <table className={clsx(css["transaction-history"])}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            {items.map(({ id, type, amount, currency }) => {
                return (
                    <tbody key={id}>
                        <tr className={clsx(css["table-body"])}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                    </tbody>
                )}
            )}
        </table>
)}

TransactionHistory.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string,
}
