import './navbar.scss';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import React, {useRef, useContext, useEffect, useState} from 'react'
import metamask from '../../images/metamask.png'
import trustwallet from '../../images/trustwallet.png'
import {provider, setProvider, signer, setSigner} from '../../App';
import Web3Modal from "web3modal";
import {ethers,  providers } from "ethers";
import values from "../../values.json"
// import Fortmatic from "fortmatic";
// import Torus from "@toruslabs/torus-embed";

const Button = () => {

  
  let [connectedWallet, setConnectedWallet] = useState(false);
  let [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    web3ModalRef.current = new Web3Modal({
      network: "rinkeby",
      providerOptions: {
        walletconnect: {
          // package: WalletConnectProvider, // required
          // options: {
          //   infuraId: "INFURA_ID" // required
          // }
          // coinbasewallet: {
          //   package: "CoinbaseWalletSDK", // Required
          //   options: {
          //     appName: "My Awesome App", // Required
          //     infuraId: "INFURA_ID", // Required
          //     rpc: "", // Optional if `infuraId` is provided; otherwise it's required
          //     chainId: 1, // Optional. It defaults to 1 if not provided
          //     darkMode: false // Optional. Use dark theme, defaults to false
          //   }
          // },
          // fortmatic: {
          //   package: Fortmatic, // required
          //   options: {
          //     key: "FORTMATIC_KEY", // required,
          //     // network: customNetworkOptions // if we don't pass it, it will default to localhost:8454
          //   }
          // },
          // torus: {
          //   package: Torus, // required
          //   options: {
          //     networkParams: {
          //       host: "https://localhost:8545", // optional
          //       chainId: 1337, // optional
          //       networkId: 1337 // optional
          //     },
          //     config: {
          //       buildEnv: "development" // optional
          //     }
          //   }
          // }
        }
      },
    });
    connectWallet();
  }, []);

  let _provider = useContext (provider);
  let _setProvider = useContext (setProvider);
  let _signer = useContext (signer);
  let _setSigner = useContext (setSigner);
  const web3ModalRef = useRef(); // return the object with key named current


  const connectWallet = async () => {
    try {
      await getSignerOrProvider(true);
    } catch (error) {
      console.log(" error", error);
    }
  };

  const getSignerOrProvider = async (needSigner = false) => {
    try{
      const _provider = new providers.JsonRpcProvider(values.rpcUrl);
      _setProvider(_provider);
      const provider = await web3ModalRef.current.connect();
      const web3Provider = new providers.Web3Provider(provider);
      const { chainId } = await web3Provider.getNetwork();
      console.log ("ChainId: ", chainId);
      // if (chainId !== 4) {
      //   alert("USE RINKEEBY NETWORK");
      //   throw new Error("Change network to Rinkeby");
      // }
      if (needSigner) {
        const signer = web3Provider.getSigner();
        _setSigner(signer)
        let temp = await signer.getAddress();
        setWalletAddress(temp.toString());
      }
      setConnectedWallet(true);
    } catch (error) {
      console.log (error);
      const provider = new providers.JsonRpcProvider(values.rpcUrl);
      _setProvider(provider);
    }
  };

  console.log ("ConnectedWallet: " , connectedWallet)


    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
  return (
    <button className='button button_main'>
             <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full">
        {(connectedWallet == true) ? <>
            {walletAddress.slice(0, 6) + "..."}
          </>
          : <>
          CONNECT
          <ChevronDownIcon className="-mr-1 ml-2 h-6 w-6 downicon" aria-hidden="true" />
          </>}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute position_change right-0 mt-2 w-56 rounded-md shadow-lg bg-[#080808] ring-1 ring-black ring-opacity-5 focus:outline-none ">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-700 ' : 'text-[#fff]',
                    'px-4 py-2 text-sm flex align-middle items-center gap-2'
                  )}
                  onClick = {connectWallet}
                >
                    <img src={metamask} className="connect_logo" alt="metamask"/>
                  Metamask
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-700 ' : 'text-[#fff]',
                    'px-4 py-2 text-sm flex align-middle items-center gap-2'
                  )}
                  onClick = {()=>{alert("Currently Trust wallet is not supported!")}}
                >
                <img src={trustwallet} className="connect_logo" alt="metamask"/>

                  Trustwallet
                </a>
              )}
            </Menu.Item>
      
            
          </div>
        </Menu.Items>
      </Transition>
    </Menu>

             </button>
  )
}

export default Button