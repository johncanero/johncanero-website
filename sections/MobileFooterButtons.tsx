import React from "react";
import Link from "next/link";
// Icons
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { IoMdPerson } from "@react-icons/all-files/io/IoMdPerson";
import { VscLinkExternal } from "@react-icons/all-files/vsc/VscLinkExternal";
import { FaConnectdevelop } from "@react-icons/all-files/fa/FaConnectdevelop";
import { AiOutlineProject } from "@react-icons/all-files/ai/AiOutlineProject";

const MobileFooterButtons = () => {
  return (
    <div>
      <div className="flex justify-center fixed bottom-0 left-0 w-screen bg-gray-100 dark:bg-black  text-center gap-11 border border-t-1 border-slate-400 dark:border-slate-700 border-x-0 py-3 md:hidden ">
        {/* Home */}
        <Link href="/" rel="noopener noreferrer">
          <button>
            <FaHome size={30} />
          </button>
        </Link>

        <IoMdPerson size={30} />
        <FaConnectdevelop size={30} />
        <AiOutlineProject size={30} />
        <VscLinkExternal size={30} />
      </div>
    </div>
  );
};

export default MobileFooterButtons;
