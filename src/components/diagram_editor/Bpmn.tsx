import React, { useEffect, useRef, useState } from "react";
import BpmnModeler from "bpmn-js/lib/Modeler";
import Modeling from "bpmn-js/lib/features/modeling/Modeling";
import Palette from "diagram-js/lib/features/palette/Palette";
import { DEFAULT_BPMN_XML } from "./default_xml";
import "./bpmn.css";

const BpmnComponent: React.FC = () => {
  const bpmnRef = useRef<HTMLDivElement>(null);

  const [modeler, setModeler] = useState<any>(null);

  let modelerInstance: any = null;

  useEffect(() => {
    if (modelerInstance) return;
    modelerInstance = new BpmnModeler({
      container: bpmnRef.current,
      additionalModules: [Modeling, Palette],
    });

    modelerInstance.importXML(DEFAULT_BPMN_XML).then((err: any) => {
      if (err.warnings.length) {
        console.warn(err.warnings);
      }

      modelerInstance.get("canvas").zoom("fit-viewport");
    });

    setModeler(modelerInstance);
  }, []);

  const handleExport = () => {
    if (modeler) {
      modeler.saveXML({ format: true }).then((res: any) => {
        if (res.error) {
          console.error(res.error);
          return;
        }

        console.log("UPDATE XML:", res.xml);
      });
    }
  };

  return (
    <>
      <button onClick={handleExport}>Save</button>
      <div ref={bpmnRef} style={{ height: "600px" }}></div>
    </>
  );
};

export default BpmnComponent;
