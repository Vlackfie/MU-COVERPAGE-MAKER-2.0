const studentDatabase = {
  "241-115-213": { name: "Tashin Islam Safat", section: "A" },
  "242-115-001": { name: "Nafisa Anjum Riana", section: "A" },
  "242-115-002": { name: "Anik Mazumder", section: "A" },
  "242-115-003": { name: "MD Raju Khan", section: "A" },
  "242-115-006": { name: "S. M. Mahidul Haque", section: "A" },
  "242-115-007": { name: "MD Yousuf ali", section: "A" },
  "242-115-008": { name: "Fabia Binte Faruk", section: "A" },
  "242-115-009": { name: "Moumita Sarkar", section: "A" },
  "242-115-010": { name: "Tanjina Rashid Esha", section: "A" },
  "242-115-011": { name: "Zahidul Hussain Riyad", section: "A" },
  "242-115-012": { name: "Mufti Faiyaz Shamim", section: "A" },
  "242-115-013": { name: "Shoumik Islam", section: "A" },
  "242-115-014": { name: "Jannatul Ferdous Jerin", section: "A" },
  "242-115-015": { name: "Rawa Yasmin chowdhury", section: "A" },
  "242-115-016": { name: "Nadia Akter", section: "A" },
  "242-115-019": { name: "MD HABIBUR RAHMAN", section: "A" },
  "242-115-020": { name: "Ankita", section: "A" },
  "242-115-021": { name: "Bishal Chandra Das", section: "A" },
  "242-115-022": { name: "Sharifa Akther moni", section: "A" },
  "242-115-026": { name: "Naima Rahman Nuha", section: "A" },
  "242-115-027": { name: "Bishal Dash Rohit", section: "A" },
  "242-115-028": { name: "Nobbendu das niloy", section: "A" },
  "242-115-029": { name: "Kishor Roy", section: "A" },
  "242-115-030": { name: "Marian Roy Chowdhury", section: "A" },
  "242-115-031": { name: "Nafisa Ahmed Neha", section: "A" },
  "242-115-032": { name: "Probal Datta", section: "A" },
  "242-115-033": { name: "AKM SHAH MAHIN", section: "A" },
  "242-115-034": { name: "Sonjoy Das", section: "A" },
  "242-115-036": { name: "Yeasmin Binte Muttakin", section: "A" },
  "242-115-038": { name: "Syed Shams Nasir", section: "A" },
  "242-115-040": { name: "Agnila Talukdar", section: "A" },
  "242-115-041": { name: "Riya Chowdhury", section: "A" },
  "242-115-042": { name: "Sukria Jahan Tamanna", section: "A" },
  "242-115-043": { name: "Fariha Islam Mim", section: "A" },
  "242-115-044": { name: "Md Mahtab Ahmed Mahin", section: "A" },
  "242-115-045": { name: "Md Hifjur Rahman", section: "A" },
  "242-115-046": { name: "Shahriar siyam", section: "A" },
  "242-115-048": { name: "Smita Paramita Shreya", section: "A" },
  "242-115-049": { name: "Srijon Dey", section: "A" },
  "242-115-050": { name: "Mahbuba Ahmed Jerin", section: "A" },
  "232-115-051": { name: "Prosenjit Debnath", section: "B" },
  "232-115-325": { name: "Muzaddid Hossain", section: "B" },
  "242-115-051": { name: "Syeda Maimuna Ali", section: "B" },
  "242-115-052": { name: "Khadija Haque Zara", section: "B" },
  "242-115-053": { name: "Anthora Sarker Priya", section: "B" },
  "242-115-054": { name: "Md Tanvir Mahmud", section: "B" },
  "242-115-055": { name: "Muradul Arefin Mahi", section: "B" },
  "242-115-056": { name: "Moumita Dhar", section: "B" },
  "242-115-057": { name: "Fabiha Montaha Mahi", section: "B" },
  "242-115-058": { name: "Aurnobi Saha", section: "B" },
  "242-115-059": { name: "Asma Akther Mim", section: "B" },
  "242-115-061": { name: "Nahin Sultana Samia", section: "B" },
  "242-115-062": { name: "Mst. Suriya Islam Sinthiya", section: "B" },
  "242-115-063": { name: "Spriha Datta", section: "B" },
  "242-115-064": { name: "Mahfujur Rahman", section: "B" },
  "242-115-065": { name: "Hafsa Alam Chowdhury", section: "B" },
  "242-115-066": { name: "Syeda Tahrina Khanam", section: "B" },
  "242-115-068": { name: "Anamika Debi", section: "B" },
  "242-115-069": { name: "Sumon Ahmed", section: "B" },
  "242-115-070": { name: "Md. Tawhid Shahriar Shahed", section: "B" },
  "242-115-071": { name: "Shaon Sarker", section: "B" },
  "242-115-078": { name: "Masuma Akther", section: "B" },
  "242-115-079": { name: "Sadikul Hossain", section: "B" },
  "242-115-080": { name: "Sumayyah Rahman", section: "B" },
  "242-115-083": { name: "Wahaj Rashid Arian", section: "B" },
  "242-115-084": { name: "Nafisa Anjum Chowdhury", section: "B" },
  "242-115-086": { name: "Jeoda Pathan Pammi", section: "B" },
  "242-115-087": { name: "Touhidul Islam", section: "B" },
  "242-115-088": { name: "Md Saber Hussain Dipu", section: "B" },
  "242-115-090": { name: "Maisha Begum", section: "B" },
  "242-115-091": { name: "Sheikh Nishat Jarin Noha", section: "B" },
  "242-115-092": { name: "Fatema Yeasmin Mili", section: "B" },
  "242-115-093": { name: "Seemanto Kumar Dash", section: "B" },
  "242-115-094": { name: "Tapon Sarkar", section: "B" },
  "242-115-096": { name: "Jannatul Ferdous Manthasha", section: "B" },
  "242-115-097": { name: "Sadia Sultana", section: "B" },
  "242-115-098": { name: "Brishti Rani Das", section: "B" },
  "242-115-099": { name: "Purbak Talukder Dony", section: "B" },
  "242-115-100": { name: "Nobonita Das Pushon", section: "B" }
};

const facultyDatabase = {
  "A": [
    { course: "Communication Engineering", code: "CSE 215", name: "Fardin Ahasan Maraz", dept: "Department of Electrical & Electronic Engineering", desig: "Professor" },
    { course: "Theory of Computation", code: "CSE 327", name: "Abu Jafar Md. Jakaria", dept: "Department of Computer Science and Engineering", desig: "Senior Lecturer" },
    { course: "Operating System", code: "CSE 321", name: "Samia Rahman Rima", dept: "Department of Computer Science and Engineering", desig: "Lecturer" },
    { course: "Operating System Lab", code: "CSE 322", name: "Samia Rahman Rima", dept: "Department of Computer Science and Engineering", desig: "Lecturer" },
    { course: "Business Communication", code: "GED 431", name: "Dr. Razaul Haque", dept: "Department of Business Administration", desig: "Professor" }
  ],
  "B": [
    { course: "Communication Engineering", code: "CSE 215", name: "Fardin Ahasan Maraz", dept: "Department of Electrical & Electronic Engineering", desig: "Professor" },
    { course: "Theory of Computation", code: "CSE 327", name: "Abu Jafar Md. Jakaria", dept: "Department of Computer Science and Engineering", desig: "Senior Lecturer" },
    { course: "Operating System", code: "CSE 321", name: "Samia Rahman Rima", dept: "Department of Computer Science and Engineering", desig: "Lecturer" },
    { course: "Operating System Lab", code: "CSE 322", name: "Samia Rahman Rima", dept: "Department of Computer Science and Engineering", desig: "Lecturer" },
    { course: "Business Communication", code: "GED 431", name: "Dr. Razaul Haque", dept: "Department of Business Administration", desig: "Professor" }
  ],
  "C": [
    { course: "Communication Engineering", code: "CSE 215", name: "Ahmed Istiakur Rahman", dept: "Department of Electrical & Electronic Engineering", desig: "Lecturer" },
    { course: "Theory of Computation", code: "CSE 327", name: "Abu Jafar Md. Jakaria", dept: "Department of Computer Science and Engineering", desig: "Senior Lecturer" },
    { course: "Operating System", code: "CSE 321", name: "Samia Rahman Rima", dept: "Department of Computer Science and Engineering", desig: "Lecturer" },
    { course: "Operating System Lab", code: "CSE 322", name: "Samia Rahman Rima", dept: "Department of Computer Science and Engineering", desig: "Lecturer" },
    { course: "Business Communication", code: "GED 431", name: "Md. Alaul Haque", dept: "Department of Business Administration", desig: "Lecturer" }
  ],
  "D": [
    { course: "Communication Engineering", code: "CSE 215", name: "Ahmed Istiakur Rahman.", dept: "Department of Electrical & Electronic Engineering", desig: "Lecturer" },
    { course: "Theory of Computation", code: "CSE 327", name: "Abu Jafar Md. Jakaria", dept: "Department of Computer Science and Engineering", desig: "Senior Lecturer" },
    { course: "Operating System", code: "CSE 321", name: "Mayami Das Purkayastha Purba", dept: "Department of Computer Science and Engineering", desig: "Lecturer" },
    { course: "Operating System Lab", code: "CSE 322", name: "Mayami Das Purkayastha Purba", dept: "Department of Computer Science and Engineering", desig: "Lecturer" },
    { course: "Business Communication", code: "GED 431", name: "Md. Alaul Haque", dept: "Department of Business Administration", desig: "Lecturer" }
  ],
  "E": [
    { course: "Communication Engineering", code: "CSE 215", name: "Ahmed Afif Rafsan", dept: "Department of Electrical & Electronic Engineering", desig: "Lecturer" },
    { course: "Theory of Computation", code: "CSE 327", name: "Abu Jafar Md. Jakaria", dept: "Department of Computer Science and Engineering", desig: "Senior Lecturer" },
    { course: "Operating System", code: "CSE 321", name: "Mayami Das Purkayastha Purba", dept: "Department of Computer Science and Engineering", desig: "Lecturer" },
    { course: "Operating System Lab", code: "CSE 322", name: "Mayami Das Purkayastha Purba", dept: "Department of Computer Science and Engineering", desig: "Lecturer" },
    { course: "Business Communication", code: "GED 431", name: "Md. Alaul Haque", dept: "Department of Business Administration", desig: "Lecturer" }
  ],
  "F": [
    { course: "Communication Engineering", code: "CSE 215", name: "Ahmed Afif Rafsan", dept: "Department of Electrical & Electronic Engineering", desig: "Lecturer" },
    { course: "Theory of Computation", code: "CSE 327", name: "Abu Jafar Md. Jakaria", dept: "Department of Computer Science and Engineering", desig: "Senior Lecturer" },
    { course: "Operating System", code: "CSE 321", name: "Mayami Das Purkayastha Purba", dept: "Department of Computer Science and Engineering", desig: "Lecturer" },
    { course: "Operating System Lab", code: "CSE 322", name: "Mayami Das Purkayastha Purba", dept: "Department of Computer Science and Engineering", desig: "Lecturer" },
    { course: "Business Communication", code: "GED 431", name: "Md. Alaul Haque", dept: "Department of Business Administration", desig: "Lecturer" }
  ],
  "G": [
    { course: "Communication Engineering", code: "CSE 215", name: "Ahmed Istiakur Rahman", dept: "Department of Electrical & Electronic Engineering", desig: "Lecturer" },
    { course: "Theory of Computation", code: "CSE 327", name: "Abu Jafar Md. Jakaria", dept: "Department of Computer Science and Engineering", desig: "Senior Lecturer" },
    { course: "Operating System", code: "CSE 321", name: "Mayami Das Purkayastha Purba", dept: "Department of Computer Science and Engineering", desig: "Lecturer" },
    { course: "Operating System Lab", code: "CSE 322", name: "Mayami Das Purkayastha Purba", dept: "Department of Computer Science and Engineering", desig: "Lecturer" },
    { course: "Business Communication", code: "GED 431", name: "Dr. Razaul Haque", dept: "Department of Business Administration", desig: "Professor" }
  ]
};

let currentSection = "B";
let memberCount = 0;

function handleDocTypeChange() {
  const docTypeSelect = document.getElementById('in-doc-type').value;
  const customHeadingInput = document.getElementById('in-custom-heading');
  if (docTypeSelect === "Custom") {
    customHeadingInput.style.display = "block";
  } else {
    customHeadingInput.style.display = "none";
    customHeadingInput.value = "";
  }
  updatePreview();
}

function handleModeChange() {
  const mode = document.getElementById('in-mode').value;
  const singleContainer = document.getElementById('single-student-container');
  const groupContainer = document.getElementById('group-input-container');
  const outSingleStudent = document.getElementById('out-single-student');
  const outGroupStudents = document.getElementById('out-group-students');

  if (mode === 'group') {
    singleContainer.style.display = "none";
    groupContainer.style.display = "block";
    outSingleStudent.style.display = "none";
    outGroupStudents.style.display = "block";
    const wrapper = document.getElementById('member-fields-wrapper');
    if (wrapper.children.length === 0) {
      addGroupMemberField();
    }
  } else {
    singleContainer.style.display = "block";
    groupContainer.style.display = "none";
    outSingleStudent.style.display = "block";
    outGroupStudents.style.display = "none";
  }
  updatePreview();
}

function handleEntryTypeChange() {
  const entryType = document.getElementById('in-entry-type').value;
  const singleIdBox = document.getElementById('single-id-box');
  const customStudentFields = document.getElementById('custom-student-fields');
  const autoFacultyContainer = document.getElementById('auto-faculty-container');
  const isCustom = entryType === 'custom';

  if (isCustom) {
    singleIdBox.style.display = "none";
    customStudentFields.style.display = "block";
    autoFacultyContainer.style.display = "none";

    document.getElementById('in-student-name').readOnly = false;
    document.getElementById('in-course').readOnly = false;
    document.getElementById('in-code').readOnly = false;
    document.getElementById('in-prof-name').readOnly = false;
    document.getElementById('in-prof-desig').readOnly = false;
    document.getElementById('in-prof-dept').readOnly = false;
  } else {
    singleIdBox.style.display = "block";
    customStudentFields.style.display = "none";
    autoFacultyContainer.style.display = "block";

    document.getElementById('in-student-name').readOnly = true;
    document.getElementById('in-course').readOnly = true;
    document.getElementById('in-code').readOnly = true;
    document.getElementById('in-prof-name').readOnly = true;
    document.getElementById('in-prof-desig').readOnly = true;
    document.getElementById('in-prof-dept').readOnly = true;
  }

  const grpIds = document.getElementsByClassName('grp-mem-id');
  for (let input of grpIds) {
    input.style.display = isCustom ? "none" : "block";
  }

  const grpNames = document.getElementsByClassName('grp-mem-name');
  for (let input of grpNames) {
    input.readOnly = !isCustom;
  }

  updatePreview();
}

function handleSingleIdInput() {
  const idVal = document.getElementById('in-student-id').value.trim();
  const nameInput = document.getElementById('in-student-name');
  if (studentDatabase[idVal]) {
    nameInput.value = studentDatabase[idVal].name;
    currentSection = studentDatabase[idVal].section;
    updateFacultyDropdown(currentSection);
  } else {
    nameInput.value = "";
  }
  updatePreview();
}

function handleMemberIdInput(index) {
  const row = document.getElementById(`member-row-${index}`);
  if (!row) return;
  const idVal = row.querySelector('.grp-mem-id').value.trim();
  const nameInput = row.querySelector('.grp-mem-name');

  if (studentDatabase[idVal]) {
    nameInput.value = studentDatabase[idVal].name;
    if (index === 1) {
      currentSection = studentDatabase[idVal].section;
      updateFacultyDropdown(currentSection);
    }
  } else {
    nameInput.value = "";
  }
  updatePreview();
}

function updateFacultyDropdown(section) {
  const select = document.getElementById('in-course-select');
  select.innerHTML = '<option value="">Select Course / Teacher</option>';
  const faculties = facultyDatabase[section] || facultyDatabase['B'];

  faculties.forEach((item, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = `${item.course} (${item.code}) - ${item.name}`;
    select.appendChild(option);
  });

  clearFacultyFields();
}

function clearFacultyFields() {
  document.getElementById('in-course').value = "";
  document.getElementById('in-code').value = "";
  document.getElementById('in-prof-name').value = "";
  document.getElementById('in-prof-desig').value = "";
  document.getElementById('in-prof-dept').value = "";
}

function handleCourseTeacherChange() {
  const selectedIndex = document.getElementById('in-course-select').value;
  const faculties = facultyDatabase[currentSection] || facultyDatabase['B'];
  const selected = faculties[selectedIndex];

  if (selected) {
    document.getElementById('in-course').value = selected.course;
    document.getElementById('in-code').value = selected.code;
    document.getElementById('in-prof-name').value = selected.name;
    document.getElementById('in-prof-desig').value = selected.desig;
    document.getElementById('in-prof-dept').value = selected.dept;
  } else {
    clearFacultyFields();
  }
  updatePreview();
}

function toggleTitleInput() {
  const isChecked = document.getElementById('check-title').checked;
  const inputField = document.getElementById('in-assign-title');
  const outputField = document.getElementById('out-assign-title');
  inputField.style.display = isChecked ? "block" : "none";
  if (!isChecked) {
    inputField.value = "";
    outputField.innerText = "";
  }
  updatePreview();
}

function toggleGroupNameInput() {
  const isChecked = document.getElementById('check-group-name').checked;
  const inputField = document.getElementById('in-group-name');
  const outputWrapper = document.getElementById('out-group-name-wrapper');
  inputField.style.display = isChecked ? "block" : "none";
  outputWrapper.style.display = isChecked ? "block" : "none";
  if (!isChecked) {
    inputField.value = "";
    document.getElementById('out-group-name').innerText = "...";
  }
  updatePreview();
}

function addGroupMemberField() {
  memberCount++;
  const wrapper = document.getElementById('member-fields-wrapper');
  const row = document.createElement('div');
  row.className = 'member-input-row';
  row.id = `member-row-${memberCount}`;

  const entryType = document.getElementById('in-entry-type').value;
  const isCustom = entryType === 'custom';

  row.innerHTML = `
    <input type="text" class="grp-mem-id" placeholder="ID (e.g. 242-115-079)" oninput="handleMemberIdInput(${memberCount})" style="display: ${isCustom ? 'none' : 'block'};">
    <input type="text" class="grp-mem-name" placeholder="Member Name" oninput="updatePreview()" ${isCustom ? '' : 'readonly'}>
    <button type="button" class="remove-member-btn" onclick="removeGroupMemberField(${memberCount})">×</button>
  `;
  wrapper.appendChild(row);
  updatePreview();
}

function removeGroupMemberField(id) {
  const row = document.getElementById(`member-row-${id}`);
  if (row) { row.remove(); }
  updatePreview();
}

function formatDate(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${day} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

function updatePreview() {
  const docTypeSelect = document.getElementById('in-doc-type').value;
  if (docTypeSelect === "Custom") {
    const customVal = document.getElementById('in-custom-heading').value;
    document.getElementById('out-doc-type').innerText = customVal || "Custom Heading";
  } else {
    document.getElementById('out-doc-type').innerText = docTypeSelect;
  }

  document.getElementById('out-course').innerText = document.getElementById('in-course').value || "...";
  document.getElementById('out-code').innerText = document.getElementById('in-code').value || "...";
  document.getElementById('out-prof-name').innerText = document.getElementById('in-prof-name').value || "...";
  document.getElementById('out-prof-desig').innerText = document.getElementById('in-prof-desig').value || "...";
  document.getElementById('out-prof-dept').innerText = document.getElementById('in-prof-dept').value || "...";

  document.getElementById('out-assign-title').innerText = document.getElementById('in-assign-title').value || "";
  document.getElementById('out-group-name').innerText = document.getElementById('in-group-name').value || "...";

  const isCustom = document.getElementById('in-entry-type').value === 'custom';
  if (isCustom) {
    document.getElementById('out-section').innerText = document.getElementById('in-section').value || "B";
    document.getElementById('out-batch').innerHTML = document.getElementById('in-batch').value || "61<sup>st</sup>";
    document.getElementById('out-student-dept').innerText = document.getElementById('in-student-dept').value || "Department of Computer Science and Engineering";
  } else {
    document.getElementById('out-section').innerText = currentSection;
    document.getElementById('out-batch').innerHTML = "61<sup>st</sup>";
    document.getElementById('out-student-dept').innerText = "Department of Computer Science and Engineering";
  }

  document.getElementById('out-student-name').innerText = document.getElementById('in-student-name').value || "...";
  document.getElementById('out-student-id').innerText = document.getElementById('in-student-id').value || "...";

  const mode = document.getElementById('in-mode').value;
  if (mode === 'group') {
    const names = document.getElementsByClassName('grp-mem-name');
    const ids = document.getElementsByClassName('grp-mem-id');
    const tbody = document.getElementById('out-member-rows');
    tbody.innerHTML = "";
    for (let i = 0; i < names.length; i++) {
      const mName = names[i].value || "...";
      const mId = (!isCustom && ids[i]) ? (ids[i].value || "...") : "N/A";
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${mName}</td><td style="text-align:center;">${mId}</td>`;
      tbody.appendChild(tr);
    }
  }

  const rawDate = document.getElementById('in-date').value;
  document.getElementById('out-date').innerText = formatDate(rawDate);
}

window.onload = function() {
  updateFacultyDropdown("B");
  handleEntryTypeChange();
};