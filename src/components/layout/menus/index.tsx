import { BrandScalea } from "./BrandScalea";
import { ProfesionalPrograms } from "./ProfesionalPrograms";
import { EspaciosInteriores } from "./EspaciosInteriores";
import { InspiracionHerramientas } from "./InspiracionHerramientas";
import { ProfesionalApplications } from "./ProfesionalApplications";
import { BrandEclos } from "./BrandEclos";
import { BrandDekton } from "./BrandDekton";
import { EspaciosBanos } from "./EspaciosBanos";
import { EspaciosExteriores } from "./EspaciosExteriores";
import { InspiracionGaleria } from "./InspiracionGaleria";
import { BrandSilestone } from "./BrandSilestone";
import { BrandSensa } from "./BrandSensa";
import { EspaciosCocinas } from "./EspaciosCocinas";
import { ProfesionalServices } from "./ProfesionalServices";
export const menuPanels = {
  "brand-scalea": BrandScalea,
  "profesional-programs": ProfesionalPrograms,
  "espacios-interiores": EspaciosInteriores,
  "inspiracion-herramientas": InspiracionHerramientas,
  "profesional-applications": ProfesionalApplications,
  "brand-eclos": BrandEclos,
  "brand-dekton": BrandDekton,
  "espacios-ba\u00f1os": EspaciosBanos,
  "espacios-exteriores": EspaciosExteriores,
  "inspiracion-galeria": InspiracionGaleria,
  "brand-silestone": BrandSilestone,
  "brand-sensa": BrandSensa,
  "espacios-cocinas": EspaciosCocinas,
  "profesional-services": ProfesionalServices,
};
export type MenuPanelId = keyof typeof menuPanels;
