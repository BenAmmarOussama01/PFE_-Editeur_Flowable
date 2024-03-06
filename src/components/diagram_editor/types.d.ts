declare module 'bpmn-js/lib/Modeler';
declare module 'bpmn-js-properties-panel';
declare module 'diagram-js-minimap' {
  const Minimap: any
  export default Minimap
};

declare module "*.bpmn" {
  const content: string;
  export default content;
};
