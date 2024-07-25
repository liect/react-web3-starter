import {
  getDefaultConfig,
} from '@rainbow-me/rainbowkit';
import { Config } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';


export const config:Config = getDefaultConfig({
  appName: 'React Web3 Starter',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet, polygon, optimism, arbitrum, base],
});
