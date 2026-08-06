import Modal from "./Modal";
import removeLoadIcon from "../../assets/removeload.png";

export default function RemoveLoadModal({ load, open, onClose, onConfirm }) {
  if (!load) return null;

  return (
    <Modal open={open} onClose={onClose} title="Remove saved load?">
      <div className="flex flex-col items-center text-center">
        <img src={removeLoadIcon} alt="" className="h-24 w-22" />
        <p className="mt-4 max-w-xs text-sm text-ink-700">
          Remove {load.id} ({load.cargo}) from your saved list?
          <br />
          This cannot be undone.
        </p>
        <button
          type="button"
          onClick={() => onConfirm(load)}
          className="mt-6 w-full max-w-xs rounded-lg bg-red-500 py-2.5 text-sm font-semibold text-white hover:bg-red-600"
        >
          Remove load
        </button>
      </div>
    </Modal>
  );
}