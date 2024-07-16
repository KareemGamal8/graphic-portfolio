import { IconCircleX, IconMenu3 } from "@tabler/icons-react";
import { headerAtom } from "../../atoms";

export default function HeaderDrawer() {
  const opened = headerAtom.useOpened();

  return (
    <div>
      <button onClick={headerAtom.toggle} className="w-8">
        {!opened ? <IconMenu3 /> : <IconCircleX size={28} />}
      </button>
    </div>
  );
}
