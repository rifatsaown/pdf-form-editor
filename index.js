const { PDFDocument } = require("pdf-lib");
const fs = require("fs");
const path = require("path");

const getFields = async () => {
  const existingPdfBytes = fs.readFileSync(path.join(__dirname, "template.pdf"));
  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  const form = pdfDoc.getForm();
  const fields = form.getFields();
  return fields;
};

getFields().then(fields => {
  fields.forEach(field => {
    console.log(field.getName());
    // console.log(`${field.getName()}`);
    // console.log(`${field}`);
  });
}).catch(error => {
  console.error(error);
});
