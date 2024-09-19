function doGet() {
  return HtmlService.createHtmlOutputFromFile('index.html');
}

function handleSubmit(e) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var values = [
    e.parameter.title,
    e.parameter.body,
    e.parameter.startDate,
    e.parameter.endDate,
    e.parameter.audience,
    e.parameter.mediaLink,
    e.parameter.broadcastNotes
  ];

  // Append values to the sheet, setting the body column (column 2) to Rich Text format
  sheet.appendRow(values, { contentFormat: { textFormat: { bold: false, italic: false, underline: false }, richText: true } });

  return ContentService.createTextOutput("Form submitted successfully!").setMimeType(ContentService.MimeType.TEXT_PLAIN);
}
