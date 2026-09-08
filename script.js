// Database of Students
const studentsData = {
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
  "242-115-100": { name: "Nobonita Das Pushon", section: "B" },
  "242-115-085": { name: "Sumaiya Jannat Shima", section: "C" },
  "242-115-101": { name: "Debojoty Roy Thirtho", section: "C" },
  "242-115-103": { name: "Jannatul Ferdous Jannat", section: "C" },
  "242-115-107": { name: "Maksura Rahman Zim", section: "C" },
  "242-115-111": { name: "Miftahur Rahman Omi", section: "C" },
  "242-115-113": { name: "Sojon Sarker", section: "C" },
  "242-115-114": { name: "Srishty Talukder Mimi", section: "C" },
  "242-115-115": { name: "Muntaha Akram Chowdhury", section: "C" },
  "242-115-116": { name: "Muhammad Farhanul Islam", section: "C" },
  "242-115-117": { name: "Nobonita Das Tonny", section: "C" },
  "242-115-120": { name: "Tonny Shree Dey Trina", section: "C" },
  "242-115-121": { name: "Nusrath Jahan Chowdhury", section: "C" },
  "242-115-123": { name: "Rini Begum Kulsuma", section: "C" },
  "242-115-125": { name: "Md. Mahmudul Hasan Yamin", section: "C" },
  "242-115-126": { name: "Md. Jubayer Hasan Munna", section: "C" },
  "242-115-127": { name: "Fahima Akther", section: "C" },
  "242-115-129": { name: "A.S.M. Nafiu Iqbal", section: "C" },
  "242-115-130": { name: "Tasmina Begum Rima", section: "C" },
  "242-115-132": { name: "Md. Mahiyan Noor Mahi", section: "C" },
  "242-115-133": { name: "Syed Farhan Hussain Rasel", section: "C" },
  "242-115-135": { name: "Ahammod Ali", section: "C" },
  "242-115-136": { name: "Bashar Ahmed", section: "C" },
  "242-115-139": { name: "Avizith Dash", section: "C" },
  "242-115-140": { name: "Shyamoshree Sinha", section: "C" },
  "242-115-141": { name: "Susoma Rahman", section: "C" },
  "242-115-142": { name: "Nuhza Suraia", section: "C" },
  "242-115-143": { name: "Riktho Saha", section: "C" },
  "242-115-144": { name: "Sadia Islam", section: "C" },
  "242-115-145": { name: "Nasisa Tabassum", section: "C" },
  "242-115-147": { name: "Nuzud Binte Olid", section: "C" },
  "242-115-148": { name: "Sudeshna Roy Pima", section: "C" },
  "242-115-149": { name: "Farzana Akter Saeeda", section: "G" },
  "242-115-150": { name: "Sabuj Hasan", section: "G" },
  "241-115-249": { name: "Fatima Islam Shaki", section: "G" },
  "241-115-152": { name: "Tinni Bonik", section: "G" },
  "242-115-301": { name: "Nafisa Rahman Ramisa", section: "G" },
  "242-115-302": { name: "Pritam Shakar Deb", section: "G" },
  "242-115-303": { name: "Rubaiya Rahman Akhi", section: "G" },
  "242-115-305": { name: "Pollab Das", section: "G" },
  "242-115-307": { name: "Sabbir Ahmed Rimon", section: "G" },
  "242-115-308": { name: "Samiha Mahjabin", section: "G" },
  "242-115-311": { name: "Umme Habiba Nuha", section: "G" },
  "242-115-313": { name: "Debapratim Deb", section: "G" },
  "242-115-314": { name: "Falguni Sharmma", section: "G" },
  "242-115-321": { name: "Nusrat Jahan Nuha", section: "G" },
  "242-115-322": { name: "Israt Jahan Bithy", section: "G" },
  "242-115-324": { name: "Gourab Chakrabarty", section: "G" },
  "242-115-325": { name: "Joy Baktchi", section: "G" },
  "242-115-326": { name: "Adrita Chakrabarty Richi", section: "G" },
  "242-115-327": { name: "Manzurul Ambia", section: "G" },
  "242-115-328": { name: "Alok Talukder", section: "G" },
  "242-115-331": { name: "Tonnoy Datta Bishal", section: "G" },
  "242-115-332": { name: "Fahmida Yeasmin Momi", section: "G" },
  "242-115-334": { name: "Tamzida Habiba Mim", section: "G" },
  "242-115-335": { name: "Tahsin Rahman", section: "G" },
  "242-115-336": { name: "Dabosri Roy Porna", section: "G" },
  "242-115-337": { name: "Promick Dastidar Sami", section: "G" },
  "242-115-342": { name: "Mahzabin Rahman Moumita", section: "G" },
  "242-115-343": { name: "Banidipa Chakraborty", section: "G" },
  "242-115-344": { name: "Md. Al-amin Ahmed Chowdhur", section: "G" },
  "242-115-346": { name: "Md. Sami Jamali", section: "G" },
  "242-115-347": { name: "Muhammad Hanif", section: "G" },
  "232-115-242": { name: "Rawful Islam Rifat", section: "E" },
  "232-115-345": { name: "Shorna Nandi", section: "E" },
  "242-115-202": { name: "Towhidul Islam", section: "E" },
  "242-115-206": { name: "Uttsho Debnath", section: "E" },
  "242-115-207": { name: "Md. Obayedur Rahman", section: "E" },
  "242-115-208": { name: "Halima Begum", section: "E" },
  "242-115-210": { name: "Rahnuma Mostafa", section: "E" },
  "242-115-211": { name: "Tanvi Khan", section: "E" },
  "242-115-212": { name: "Bishakha Chanda", section: "E" },
  "242-115-213": { name: "Shimla Sinha", section: "E" },
  "242-115-214": { name: "Syed Ehsan Hussan", section: "E" },
  "242-115-215": { name: "Bijay Krishna Paul", section: "E" },
  "242-115-216": { name: "Miftahul Islam Fahim", section: "E" },
  "242-115-219": { name: "Syeda Nusrat Jahan Rini", section: "E" },
  "242-115-220": { name: "Umme Koli", section: "E" },
  "242-115-221": { name: "Nusrat Jahan Muntaha", section: "E" },
  "242-115-222": { name: "Tafhima Murshed Adri", section: "E" },
  "242-115-224": { name: "Sabbiha Afrin Suchi", section: "E" },
  "242-115-225": { name: "Fahim Muntasir Sadi", section: "E" },
  "242-115-226": { name: "Sabiha Sami", section: "E" },
  "242-115-227": { name: "Showvik Sharma", section: "E" },
  "242-115-229": { name: "Jarin Taslim", section: "E" },
  "242-115-230": { name: "Mashura Khatun Mashu", section: "E" },
  "242-115-231": { name: "Maisha Farjana Raisa", section: "E" },
  "242-115-232": { name: "Sukanto Biswas", section: "E" },
  "242-115-233": { name: "Shrabon", section: "E" },
  "242-115-235": { name: "Md. Fardin Mahtab", section: "E" },
  "242-115-236": { name: "Nihal Khan", section: "E" },
  "242-115-237": { name: "Nafisha Samin", section: "E" },
  "242-115-238": { name: "Choudhury Adil", section: "E" },
  "242-115-243": { name: "Amina-Al-adiba", section: "E" },
  "242-115-244": { name: "Ratul Chakraborty", section: "E" },
  "242-115-245": { name: "Md. Mehedi Hasan", section: "E" },
  "242-115-246": { name: "Farzana Rahman Riya", section: "E" },
  "242-115-247": { name: "Mahdee Haque", section: "E" },
  "242-115-248": { name: "Tarek Ahmed Oyan", section: "E" },
  "242-115-249": { name: "Sabysachi Das Tony", section: "E" },
  "242-115-250": { name: "Mehedi Hasan", section: "E" },
  "242-115-151": { name: "Thouhida Yeasmin", section: "D" },
  "242-115-152": { name: "Tawhid Hussain Chowdhury", section: "D" },
  "242-115-153": { name: "Abdul Muhit Fahim Chowdhury", section: "D" },
  "242-115-154": { name: "Md. Tanvirul Islam Tanim", section: "D" },
  "242-115-155": { name: "Maliha Tabassum Hridila", section: "D" },
  "242-115-156": { name: "Mohua Pathan Madhobi", section: "D" },
  "242-115-157": { name: "Abu Bokor Al Moyeen", section: "D" },
  "242-115-158": { name: "Nabil Abdullah Chowdhury", section: "D" },
  "242-115-159": { name: "Sharmin Akter", section: "D" },
  "242-115-160": { name: "Riya Das", section: "D" },
  "242-115-161": { name: "Senjuti Gupta", section: "D" },
  "242-115-162": { name: "Shamsul Arefin Kanon", section: "D" },
  "242-115-163": { name: "Mohsin Hasan", section: "D" },
  "242-115-164": { name: "Fatema Akter", section: "D" },
  "242-115-165": { name: "Tahsin Rahman Rijoy", section: "D" },
  "242-115-166": { name: "Sayed Talha Siddik", section: "D" },
  "242-115-167": { name: "Ashraul Anam Mashafi", section: "D" },
  "242-115-168": { name: "Sultana Akter", section: "D" },
  "242-115-169": { name: "Arman Ahmed", section: "D" },
  "242-115-170": { name: "Md. Imran Hossen", section: "D" },
  "242-115-171": { name: "Mukti Rani Paik", section: "D" },
  "242-115-172": { name: "Mst. Fatheha Rahman Riya", section: "D" },
  "242-115-173": { name: "Nazmul Islam", section: "D" },
  "242-115-174": { name: "Nurul Muhsin Najif", section: "D" },
  "242-115-175": { name: "Fariha Hussain Trina", section: "D" },
  "242-115-176": { name: "Abdur Rahman Mamun", section: "D" },
  "242-115-177": { name: "Soumita Acharjee", section: "D" },
  "242-115-178": { name: "Shahidul Islam Kamran", section: "D" },
  "242-115-179": { name: "Afzal Hussain Sayem", section: "D" },
  "242-115-180": { name: "Saif Al Safa", section: "D" },
  "242-115-181": { name: "Shuvo Debnath", section: "D" },
  "242-115-182": { name: "Md. Nadim Fazla Rafi", section: "D" },
  "242-115-183": { name: "Debojyoti Talukder Raj", section: "D" },
  "242-115-184": { name: "Tonmoy Chakrabarty", section: "D" },
  "242-115-185": { name: "Madhobe Gosh", section: "D" },
  "242-115-186": { name: "Shruti Das Pourkaystha", section: "D" },
  "242-115-187": { name: "Tanjina Tasnim Tahsin", section: "D" },
  "242-115-188": { name: "Sumir Paul", section: "D" },
  "242-115-189": { name: "Mahadi Hasan Tanim", section: "D" },
  "242-115-190": { name: "Sumaiya Jaman Urmi", section: "D" },
  "242-115-191": { name: "Nondita Ray", section: "D" },
  "242-115-192": { name: "Sheikh Sumaiya Binte Musa", section: "D" },
  "242-115-193": { name: "Sheikh Nafisa Montaha", section: "D" },
  "242-115-194": { name: "Aysha Akther Tanni", section: "D" },
  "242-115-195": { name: "Md. Shorifull Hasan Oni", section: "D" },
  "242-115-196": { name: "Tarek Amin", section: "D" },
  "242-115-197": { name: "Tabassuma Bushra Masuma", section: "D" },
  "242-115-198": { name: "Muhammad Mahbubur Rahman Shahan", section: "D" },
  "242-115-199": { name: "Umma Rumman Jim", section: "D" },
  "242-115-200": { name: "Bishal Sutradher", section: "D" }
};

// Database of Teachers mapping section -> array of teachers
const facultyData = {
  "A": [
    { name: "Mashia Hossain", course: "Communication Engineering", code: "CSE 215", desig: "Lecturer", dept: "Computer Science & Engineering" },
    { name: "Barnali Sarker Shoumita", course: "Operating System", code: "CSE 321", desig: "Teaching Assistant", dept: "Computer Science & Engineering" },
    { name: "Barnali Sarker Shoumita", course: "Operating System Lab", code: "CSE 322", desig: "Teaching Assistant", dept: "Computer Science & Engineering" },
    { name: "Khadia Akter", course: "Business Communication", code: "GED 431", desig: "Lecturer", dept: "Business Administration" }
  ],
  "B": [
    { name: "Wadia Iqbal Chowdhury", course: "Communication Engineering", code: "CSE 215", desig: "Lecturer", dept: "Software Engineering" },
    { name: "Samia Rahman Rima", course: "Operating System", code: "CSE 321", desig: "Lecturer", dept: "Computer Science & Engineering" },
    { name: "Samia Rahman Rima", course: "Operating System Lab", code: "CSE 322", desig: "Lecturer", dept: "Computer Science & Engineering" },
    { name: "Khadia Akter", course: "Business Communication", code: "GED 431", desig: "Lecturer", dept: "Business Administration" }
  ],
  "C": [
    { name: "Wadia Iqbal Chowdhury", course: "Communication Engineering", code: "CSE 215", desig: "Lecturer", dept: "Software Engineering" },
    { name: "Samia Rahman Rima", course: "Operating System", code: "CSE 321", desig: "Lecturer", dept: "Computer Science & Engineering" },
    { name: "Samia Rahman Rima", course: "Operating System Lab", code: "CSE 322", desig: "Lecturer", dept: "Computer Science & Engineering" },
    { name: "Khadia Akter", course: "Business Communication", code: "GED 431", desig: "Lecturer", dept: "Business Administration" }
  ],
  "D": [
    { name: "Wadia Iqbal Chowdhury", course: "Communication Engineering", code: "CSE 215", desig: "Lecturer", dept: "Software Engineering" },
    { name: "Samia Rahman Rima", course: "Operating System", code: "CSE 321", desig: "Lecturer", dept: "Computer Science & Engineering" },
    { name: "Samia Rahman Rima", course: "Operating System Lab", code: "CSE 322", desig: "Lecturer", dept: "Computer Science & Engineering" },
    { name: "Dr. Md. Razaul Haque", course: "Business Communication", code: "GED 431", desig: "Assistant Professor", dept: "Business Administration" }
  ],
  "E": [
    { name: "Md. Imam Mahdi", course: "Communication Engineering", code: "CSE 215", desig: "Lecturer", dept: "Electrical and Electronic Engineering" },
    { name: "Khalid Bin Selim", course: "Operating System", code: "CSE 321", desig: "Teaching Assistant", dept: "Computer Science & Engineering" },
    { name: "Khalid Bin Selim", course: "Operating System Lab", code: "CSE 322", desig: "Teaching Assistant", dept: "Computer Science & Engineering" },
    { name: "Dr. Md. Razaul Haque", course: "Business Communication", code: "GED 431", desig: "Assistant Professor", dept: "Business Administration" }
  ],
  "F": [
    { name: "Md. Imam Mahdi", course: "Communication Engineering", code: "CSE 215", desig: "Lecturer", dept: "Electrical and Electronic Engineering" },
    { name: "Khalid Bin Selim", course: "Operating System", code: "CSE 321", desig: "Teaching Assistant", dept: "Computer Science & Engineering" },
    { name: "Khalid Bin Selim", course: "Operating System Lab", code: "CSE 322", desig: "Teaching Assistant", dept: "Computer Science & Engineering" },
    { name: "Dr. Md. Razaul Haque", course: "Business Communication", code: "GED 431", desig: "Assistant Professor", dept: "Business Administration" }
  ],
  "G": [
    { name: "Wadia Iqbal Chowdhury", course: "Communication Engineering", code: "CSE 215", desig: "Lecturer", dept: "Software Engineering" },
    { name: "Samia Rahman Rima", course: "Operating System", code: "CSE 321", desig: "Lecturer", dept: "Computer Science & Engineering" },
    { name: "Samia Rahman Rima", course: "Operating System Lab", code: "CSE 322", desig: "Lecturer", dept: "Computer Science & Engineering" },
    { name: "Dr. Md. Razaul Haque", course: "Business Communication", code: "GED 431", desig: "Assistant Professor", dept: "Business Administration" }
  ]
};

let memberCount = 0;
let currentSelectedSection = "B";

document.addEventListener("DOMContentLoaded", () => {
  renderFormFields();
});

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

function handleSubmissionTypeChange() {
  const subType = document.getElementById('in-submission-type').value;
  const grpContainer = document.getElementById('group-name-container');
  if (subType === 'group') {
    grpContainer.style.display = 'block';
  } else {
    grpContainer.style.display = 'none';
  }
  renderFormFields();
  updatePreview();
}

function handleEntryModeChange() {
  renderFormFields();
  updatePreview();
}

function renderFormFields() {
  const subType = document.getElementById('in-submission-type').value;
  const mode = document.getElementById('in-entry-mode').value;
  const container = document.getElementById('dynamic-form-fields');
  const teacherAutoContainer = document.getElementById('teacher-auto-container');
  const teacherCustomContainer = document.getElementById('teacher-custom-container');

  container.innerHTML = "";
  memberCount = 0;

  if (mode === 'custom') {
    teacherAutoContainer.style.display = 'none';
    teacherCustomContainer.style.display = 'block';
  } else {
    teacherAutoContainer.style.display = 'block';
    teacherCustomContainer.style.display = 'none';
  }

  if (subType === 'individual' && mode === 'auto') {
    container.innerHTML = `
      <div class="section-label">Student Details</div>
      <input type="text" id="in-student-id" placeholder="Enter Student ID (e.g. 242-115-079)" oninput="handleAutoIdInput()">
      <input type="text" id="in-student-name" placeholder="Student Name" readonly>
      <input type="text" id="in-student-section" placeholder="Section" readonly>
    `;
  } else if (subType === 'individual' && mode === 'custom') {
    container.innerHTML = `
      <div class="section-label">Student Details (Custom)</div>
      <input type="text" id="in-student-name" placeholder="Student Name" oninput="updatePreview()">
      <input type="text" id="in-student-id" placeholder="Student ID" oninput="updatePreview()">
      <input type="text" id="in-student-section" placeholder="Section (e.g. B)" oninput="handleCustomSectionChange()">
      <input type="text" id="in-student-batch" placeholder="Batch (e.g. 61st)" oninput="updatePreview()">
      <input type="text" id="in-student-dept" placeholder="Department" oninput="updatePreview()">
    `;
  } else if (subType === 'group' && mode === 'auto') {
    container.innerHTML = `
      <div id="group-input-container">
        <div class="section-label">Group Members (Auto ID)</div>
        <div id="member-fields-wrapper"></div>
        <button type="button" class="add-member-btn" onclick="addAutoGroupMemberField()">+ Add Group Member</button>
      </div>
    `;
    addAutoGroupMemberField();
  } else if (subType === 'group' && mode === 'custom') {
    container.innerHTML = `
      <div id="group-input-container">
        <div class="section-label">Group Details & Members</div>
        <input type="text" id="in-group-section" placeholder="Section (e.g. B)" oninput="handleCustomSectionChange()" style="margin-bottom: 8px;">
        <input type="text" id="in-student-batch" placeholder="Batch (e.g. 61st)" oninput="updatePreview()" style="margin-bottom: 8px;">
        <input type="text" id="in-student-dept" placeholder="Department" oninput="updatePreview()" style="margin-bottom: 8px;">
        <div id="member-fields-wrapper"></div>
        <button type="button" class="add-member-btn" onclick="addCustomGroupMemberField()">+ Add Group Member</button>
      </div>
    `;
    addCustomGroupMemberField();
  }
}

function handleAutoIdInput() {
  const id = document.getElementById('in-student-id').value.trim();
  const student = studentsData[id];
  if (student) {
    document.getElementById('in-student-name').value = student.name;
    document.getElementById('in-student-section').value = student.section;
    currentSelectedSection = student.section;
    populateTeachersList(student.section);
  } else {
    document.getElementById('in-student-name').value = "";
    document.getElementById('in-student-section').value = "";
  }
  updatePreview();
}

function handleGroupMemberIdInput(rowId) {
  const idEl = document.getElementById(`grp-mem-id-${rowId}`);
  const nameEl = document.getElementById(`grp-mem-name-${rowId}`);
  if (!idEl || !nameEl) return;

  const student = studentsData[idEl.value.trim()];
  if (student) {
    nameEl.value = student.name;
    if (rowId === 1) {
      currentSelectedSection = student.section;
      populateTeachersList(student.section);
    }
  } else {
    nameEl.value = "";
  }
  updatePreview();
}

function handleCustomSectionChange() {
  const secEl = document.getElementById('in-student-section') || document.getElementById('in-group-section');
  if (secEl) {
    currentSelectedSection = secEl.value.trim() || "B";
  }
  updatePreview();
}

function populateTeachersList(section) {
  const selectEl = document.getElementById('in-prof-select');
  selectEl.innerHTML = '<option value="">Select Faculty / Teacher</option>';
  
  const teachers = facultyData[section] || facultyData["B"];
  teachers.forEach((t, index) => {
    const opt = document.createElement('option');
    opt.value = index;
    opt.innerText = `${t.name} (${t.course})`;
    selectEl.appendChild(opt);
  });
}

function handleTeacherSelect() {
  const index = document.getElementById('in-prof-select').value;
  const teachers = facultyData[currentSelectedSection] || facultyData["B"];
  if (index !== "" && teachers[index]) {
    const t = teachers[index];
    document.getElementById('in-course').value = t.course;
    document.getElementById('in-code').value = t.code;
  }
  updatePreview();
}

function addAutoGroupMemberField() {
  memberCount++;
  const wrapper = document.getElementById('member-fields-wrapper');
  const row = document.createElement('div');
  row.className = 'member-input-row';
  row.id = `member-row-${memberCount}`;
  row.innerHTML = `
    <input type="text" id="grp-mem-id-${memberCount}" class="grp-mem-id" placeholder="Student ID" oninput="handleGroupMemberIdInput(${memberCount})">
    <input type="text" id="grp-mem-name-${memberCount}" class="grp-mem-name" placeholder="Member Name" readonly>
    <button type="button" class="remove-member-btn" onclick="removeGroupMemberField(${memberCount})">×</button>
  `;
  wrapper.appendChild(row);
  updatePreview();
}

function addCustomGroupMemberField() {
  memberCount++;
  const wrapper = document.getElementById('member-fields-wrapper');
  const row = document.createElement('div');
  row.className = 'member-input-row';
  row.id = `member-row-${memberCount}`;
  row.innerHTML = `
    <input type="text" class="grp-mem-name" placeholder="Member Name" oninput="updatePreview()">
    <input type="text" class="grp-mem-id" placeholder="Student ID" oninput="updatePreview()">
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

function formatDate(dateString) {
  if (!dateString) return "...";
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${day} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

function updatePreview() {
  const subType = document.getElementById('in-submission-type').value;
  const mode = document.getElementById('in-entry-mode').value;

  // 1. Document Heading
  const docTypeSelect = document.getElementById('in-doc-type').value;
  if (docTypeSelect === "Custom") {
    document.getElementById('out-doc-type').innerText = document.getElementById('in-custom-heading').value || "Custom Heading";
  } else {
    document.getElementById('out-doc-type').innerText = docTypeSelect;
  }

  // Title
  document.getElementById('out-assign-title').innerText = document.getElementById('in-assign-title').value || "";

  // Course Details
  document.getElementById('out-course').innerText = document.getElementById('in-course').value || "...";
  document.getElementById('out-code').innerText = document.getElementById('in-code').value || "...";

  // Teacher Info
  if (mode === 'auto') {
    const index = document.getElementById('in-prof-select').value;
    const teachers = facultyData[currentSelectedSection] || facultyData["B"];
    if (index !== "" && teachers[index]) {
      const t = teachers[index];
      document.getElementById('out-prof-name').innerText = t.name;
      document.getElementById('out-prof-desig').innerText = t.desig;
      document.getElementById('out-prof-dept').innerText = t.dept;
    } else {
      document.getElementById('out-prof-name').innerText = "...";
      document.getElementById('out-prof-desig').innerText = "...";
      document.getElementById('out-prof-dept').innerText = "...";
    }
  } else {
    document.getElementById('out-prof-name').innerText = document.getElementById('in-prof-name-custom').value || "...";
    document.getElementById('out-prof-desig').innerText = document.getElementById('in-prof-desig-custom').value || "...";
    document.getElementById('out-prof-dept').innerText = document.getElementById('in-prof-dept-custom').value || "...";
  }

  // Student & Group display logic
  const outSingleStudent = document.getElementById('out-single-student');
  const outGroupStudents = document.getElementById('out-group-students');

  if (subType === 'individual') {
    outSingleStudent.style.display = "block";
    outGroupStudents.style.display = "none";
    document.getElementById('out-student-name').innerText = document.getElementById('in-student-name')?.value || "...";
    document.getElementById('out-student-id').innerText = document.getElementById('in-student-id')?.value || "...";
    
    if (mode === 'auto') {
      const id = document.getElementById('in-student-id')?.value.trim();
      const st = studentsData[id];
      document.getElementById('out-section').innerText = st ? st.section : "B";
      document.getElementById('out-batch').innerHTML = `61<sup>st</sup>`;
      document.getElementById('out-department').innerText = "Department of Computer Science and Engineering";
    } else {
      document.getElementById('out-section').innerText = document.getElementById('in-student-section')?.value || "B";
      document.getElementById('out-batch').innerText = document.getElementById('in-student-batch')?.value || "61st";
      document.getElementById('out-department').innerText = document.getElementById('in-student-dept')?.value || "Department of Computer Science and Engineering";
    }
  } else {
    outSingleStudent.style.display = "none";
    outGroupStudents.style.display = "block";

    // Populate Group Table
    const names = document.getElementsByClassName('grp-mem-name');
    const ids = document.getElementsByClassName('grp-mem-id');
    const tbody = document.getElementById('out-member-rows');
    tbody.innerHTML = "";

    for (let i = 0; i < names.length; i++) {
      const mName = names[i].value || "...";
      const mId = ids[i].value || "...";
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${mName}</td><td style="text-align:center;">${mId}</td>`;
      tbody.appendChild(tr);
    }

    // Static/Dynamic Footer Info for Group
    if (mode === 'auto') {
      document.getElementById('out-section').innerText = currentSelectedSection;
      document.getElementById('out-batch').innerHTML = `61<sup>st</sup>`;
      document.getElementById('out-department').innerText = "Department of Computer Science and Engineering";
    } else {
      document.getElementById('out-section').innerText = document.getElementById('in-group-section')?.value || "B";
      document.getElementById('out-batch').innerText = document.getElementById('in-student-batch')?.value || "61st";
      document.getElementById('out-department').innerText = document.getElementById('in-student-dept')?.value || "Department of Computer Science and Engineering";
    }
  }

  // Group Name
  if (document.getElementById('check-group-name').checked) {
    document.getElementById('out-group-name').innerText = document.getElementById('in-group-name').value || "...";
  }

  // Date
  document.getElementById('out-date').innerText = formatDate(document.getElementById('in-date').value);
}
