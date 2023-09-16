import DashBoardBox from "@/components/DashBoardBox";
import { useGetKpisQuery } from "@/state/api";

const Row1 = () => {
  const { data } = useGetKpisQuery();
  console.log("🚀 ~ file: Row1.tsx:6 ~ Row1 ~ data:", data);
  return (
    <>
      <DashBoardBox gridArea="a"></DashBoardBox>

      <DashBoardBox gridArea="b"></DashBoardBox>

      <DashBoardBox gridArea="c"></DashBoardBox>
    </>
  );
};

export default Row1;
