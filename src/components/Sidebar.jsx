import ButtonOperation from "./ui/ButtonOperation";

export default function Sidebar({ handleReset }) {
  return (
    <div className=" pt-3 bg-">
      <h3>Sidebar</h3>

      <ButtonOperation
        label={"Reset"}
        onClick={handleReset}
        color="btn-warning"
      />
    </div>
  );
}
