import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

function TakeAssignment() {
  const { user, displayName } = useContext(AuthContext);
  const [documentLink, setDocumentLink] = useState("");
  const [note, setNote] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission here
    // console.log("Document Link:", documentLink);
    // console.log("Note:", note);
    // Set showPreview to true to display the preview
    setShowPreview(true);

    const form = event.target;
    const email = form.email.value;
    const documentLink = form.documentLink.value;
    const note = form.note.value;

    const submittedAssignment = {
      name,
      documentLink,
      note,
      email,
    };
    console.log(submittedAssignment);
  };

  return (
    <div className="bg-amber-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-bold text-3xl py-4">
          Assignment Submission
        </h2>
        <div className="flex justify-center items-center bg-slate-200 p-4 rounded-2xl">
          <form onSubmit={handleSubmit}>
            <div>
              <label className="text-2xl font-bold" htmlFor="document">
                Document Link (PDF/DOC):
              </label>
              <br />
              <input
                className="border border-slate-400 w-full py-2 px-4 mt-4"
                type="text"
                id="document"
                // value={documentLink}
                name="documentLink"
                placeholder="PDF/DOC URL"
                onChange={(e) => setDocumentLink(e.target.value)}
                required
              />
              <br />
            </div>
            <div className="py-8">
              <label className="text-2xl" htmlFor="note">
                Note:
              </label>
              <br />
              <textarea
                className="border border-slate-400 w-full mt-2 p-4"
                id="note"
                // value={note}
                name="note"
                placeholder="Quick Note"
                onChange={(e) => setNote(e.target.value)}
                rows="4"
                cols="50"
              ></textarea>
              <br />
            </div>
            <div className="form-control md:w-full pb-4 ">
              <label className="label">
                <span className="label-text font-bold">Submitting By</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="email"
                  defaultValue={user?.email ?? ""}
                  className="input input-bordered md:w-full"
                />
              </label>
            </div>
            <div>
              <input
                className="btn p-4 mb-3 bg-green-500 w-full"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
        {showPreview && (
          <div>
            <h2 className="text-center font-bold text-2xl py-4">
              Document Preview
            </h2>
            <iframe
              title="Document Preview"
              src={documentLink}
              width="100%"
              height="500px"
              style={{ border: "1px solid #ccc" }}
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}

export default TakeAssignment;
