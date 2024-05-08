import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { CONTRACT_ABI } from "./contractABI";

const contractAddress = "0x4F9ce08f52bC9715AFBA9546F81A1749D078F802";

export const contract = getContract({
    client: client,
    chain: chain,
    address: contractAddress,
    abi: CONTRACT_ABI,
});