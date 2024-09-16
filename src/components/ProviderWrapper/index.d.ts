import { userConfigs } from "../../models/userConfig";

// components/ProviderWrapper/index.d.ts
declare module './index' {
  interface ProviderWrapperProps {
    userConfigs: userConfigs;
    children: React.ReactNode;
  }

  const ProviderWrapper: (props: ProviderWrapperProps) => JSX.Element;
  export default ProviderWrapper;
}