import clsx from 'clsx';
import PropTypes from 'prop-types';

import css from 'components/transactionHistory/TransactionHistory.module.css';

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
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })).isRequired,
}
