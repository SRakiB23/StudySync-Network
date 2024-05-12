const PendingAssignmentRow = ({ assignment }) => {
  const { title, marks, name } = assignment;

  return (
    <tr className="border border-black font-bold text-xl">
      <td>{title}</td>
      <td>{marks}</td>
      <td>{name}</td>
      <th>
        <button className="btn btn-ghost btn-xs font-bold bg-red-300 px-6">
          Give Mark
        </button>
      </th>
    </tr>
  );
};

export default PendingAssignmentRow;
