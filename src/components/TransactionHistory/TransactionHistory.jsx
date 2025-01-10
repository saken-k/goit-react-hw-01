import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <div className={css.table}>
      <table>
        <thead className={css.tableHeader}>
          <tr>
            <th className={css.tableTh}>Type</th>
            <th className={css.tableTh}>Amount</th>
            <th className={css.tableTh}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr className={css.tableContent} key={item.id}>
              <td className={css.tableTd}>{item.type}</td>
              <td className={css.tableTd}>{item.amount}</td>
              <td className={css.tableTd}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
