import { Formik, Form } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";

import Modal from "./Modal";
import OfferAmountField from "./OfferAmountField";
import TransitTimeField from "./TransitTimeField";
import SelectField from "./SelectField";
import TextareaField from "./TextareaField";
import { carrierFleetOptions } from "../../mock/loadsData";

const schema = Yup.object({
  offerAmount: Yup.number().positive("Enter an amount greater than 0").required("Required"),
  transitDays: Yup.number().min(1, "Must be at least 1 day").required("Required"),
  truckId: Yup.string().required("Select a truck"),
  trailerId: Yup.string().required("Select a trailer"),
  driverId: Yup.string().required("Select a driver"),
  notes: Yup.string(),
});

export default function SubmitOfferModal({ load, open, onClose }) {
  if (!load) return null;

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // TODO: await api.post(`/loads/${load.id}/offers`, values)
      await new Promise((r) => setTimeout(r, 700));
      toast.success(`Offer submitted for ${load.id}`);
      resetForm();
      onClose();
    } catch (err) {
      toast.error(err?.message || "Couldn't submit offer");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Modal open={open} onClose={onClose} title="Submit Offer">
      <div className="rounded-xl bg-gray-50 p-4">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-[#019E59]">{load.id}</span>
          <span className="rounded border border-gray-200 px-2 py-0.5 text-xs font-medium text-ink-500">
            {load.equipment}
          </span>
        </div>
        <div className="mt-3 flex items-start justify-between gap-4">
          <div>
            <p className="font-bold text-ink-900">{load.cargo}</p>
            <p className="mt-0.5 text-sm text-ink-700">
              {load.from} <span className="mx-1 text-[#019E59]">→</span> {load.to}
            </p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-xs uppercase tracking-wide text-ink-500">Shipper Range</p>
            <p className="font-bold text-ink-900">
              ${load.shipperRange.min.toLocaleString()} – ${load.shipperRange.max.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <Formik
        initialValues={{
          offerAmount: load.shipperRange.max - 300 > load.shipperRange.min
            ? load.shipperRange.max - 300
            : load.shipperRange.min,
          transitDays: 2,
          truckId: "",
          trailerId: "",
          driverId: "",
          notes: "",
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ isSubmitting }) => (
          <Form className="mt-5 flex flex-col gap-5">
            <OfferAmountField name="offerAmount" />
            <TransitTimeField name="transitDays" label="Estimated Transit Time *" />

            <SelectField
              name="truckId"
              label="Assign Truck"
              placeholder="Select truck…"
              options={carrierFleetOptions.trucks}
            />
            <SelectField
              name="trailerId"
              label="Assign Trailer"
              placeholder="Select trailer…"
              options={carrierFleetOptions.trailers}
            />
            <SelectField
              name="driverId"
              label="Assign Driver"
              placeholder="Select Driver…"
              options={carrierFleetOptions.drivers}
            />

            <TextareaField
              name="notes"
              label="Notes to Shipper (optional)"
              placeholder="Available for pickup by 6 AM. Experienced with steel coil loads."
            />

            <div className="mt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg px-5 py-2.5 text-sm font-semibold text-ink-500 hover:text-ink-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-lg bg-[#019E59] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600 disabled:opacity-60"
              >
                {isSubmitting ? "Submitting…" : "Submit Offer"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}