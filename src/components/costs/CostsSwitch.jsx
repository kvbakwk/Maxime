import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const CostsSwitch = ({ costsType, setCostsType }) => {
  return (
    <div className="type">
      <ToggleButtonGroup value={costsType} size="small" exclusive={true}>
        <ToggleButton
          value={0}
          onClick={() => {
            setCostsType(0);
          }}>
          Początkowe
        </ToggleButton>
        <ToggleButton
          value={1}
          onClick={() => {
            setCostsType(1);
          }}>
          Stałe
        </ToggleButton>
        <ToggleButton
          value={2}
          onClick={() => {
            setCostsType(2);
          }}>
          Zmienne
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default CostsSwitch;
