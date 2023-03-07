import datas from "../../constants/dummy/data-image.json";

type DataProps = {
  type: string;
  dimension: string;
  ratio: string;
};

const TableImageSize = () => {
  return (
    <table>
      <thead>
        <tr>
          <th className="font-bold p-1 border bg-gray-300 text-black">
            Image Type
          </th>
          <th className="font-bold p-1 border bg-gray-300 text-black">
            Dimensions
          </th>
          <th className="font-bold p-1 border bg-gray-300 text-black">
            Aspect Ratio
          </th>
        </tr>
      </thead>
      <tbody>
        {datas.map((data: DataProps, idx: number) => (
          <tr key={idx}>
            <td className="p-1 border">{data.type}</td>
            <td className="p-1 border">{data.dimension}</td>
            <td className="p-1 border">{data.ratio}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableImageSize;
