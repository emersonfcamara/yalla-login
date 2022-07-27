import "./landing_page.css"
import LPHeaderCard from "./LPHeaderCard";
import LPHeaderContent from "./LPHeaderContent";
import LPNewsLetter from "./LPNewsLetter";
import LPTestimonial from "./LPTestimonial";
import LPProduct from "./LPProduct";
import LPTitle from "./LPTitle";

function LPIndex() {
  return (
    <div id="content-container">
      <div id="_bg__landing_page"></div>

      <div id="group_1000001583">
        <LPHeaderCard />
      </div>

      <div id="frame_12">
        <LPHeaderContent />
      </div>

      <LPNewsLetter />

      <LPTestimonial />

      <div id="frame_13">
        <LPProduct />
      </div>

      <LPTitle />
    </div>
  );
}

export default LPIndex;
