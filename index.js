import { PDFDocument } from 'pdf-lib';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const getFields = async () => {
  const existingPdfBytes = readFileSync(
    join(__dirname, 'template.pdf')
  );
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const form = pdfDoc.getForm();
  form.getTextField('qbId').setText('1111');
  form.getTextField('aideName').setText('John Doe');
  form.getTextField('assignmentId').setText('2222');
  form.getTextField('patientPhone1').setText('123-456-7890');
  form.getTextField('patientPhone').setText('123-456-7890');
  form.getTextField('startingDate').setText('01/01/2021');
  form.getTextField('patientFirstName').setText('Jane');
  form.getTextField('patientLastName').setText('Doe');
  form.getTextField('patientAddress').setText('123 Main St');
  form.getTextField('patientDOB').setText('01/01/2001');
  form.getDropdown('patientGender').select('Male');
  form.getTextField('Monday').setText('');
  form.getTextField('Tuesday').setText('');
  form.getTextField('Wednesday').setText('');
  form.getTextField('Thursday').setText('');
  form.getTextField('Friday').setText('');
  form.getTextField('Saturday').setText('');
  form.getTextField('Sunday').setText('8:00 AM - 5:00 PM');
  form.getTextField('specialNotes').setText('Special notes here ... ');

  const pdfBytes = await pdfDoc.save();
  writeFileSync(join(__dirname, 'output.pdf'), pdfBytes);
};

getFields()
  .then(() => {
    console.log('Done');
  })
  .catch((err) => {
    console.error(err);
  });
