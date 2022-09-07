//tangkap beberapa element html dengan cara
let modal = document.getElementById('modal');
let floating_button = document.getElementById('floating_button');
let modal_bg = document.getElementById('modal_bg');
let addlist_form = document.getElementById('addlist_form');
let root = document.getElementById('root');
let subtitle = document.getElementById('subtitle');

// menambahkan date ke subtitle dengan cara
subtitle = new Date().toLocaleDateString();
// data list belanja
let data_list_belanja = [];

// menambahkan event listener ke floating button

// floating_button?.addEventListener('click', () => {
//   // munculkan modal

//   if (modal.style.display == 'none') {
//     showModal();
//     return;
//   }
floating_button.addEventListener('click', () => {
  console.info(modal.style.display);
  // munculkan modal
  if (modal.style.display == 'flex') {
    hideModal();
    return;
  }
  // sembunyikan kembali
  showModal();
});

// menambahkan event listener ke modal bg dengan cara
modal_bg.addEventListener('click', () => {
  // sembunyikan kembali
  hideModal();
});

// tambahkan event listener submit ke addlist form
addlist_form.addEventListener('submit', (event) => {
  // stop form dari reload page
  event.preventDefault();
  // tangkap value dari masing" input field
  let barang = event.target.barang.value;
  let harga = event.target.harga.value;
  // push data ke data list belanja dengan cara
  data_list_belanja.push({
    nama_barang: barang,
    harga_barang: harga,
    tanggal: new Date().toLocaleDateString(),
  });
  console.info(data_list_belanja);
  //mengclear input field
  event.target.barang.value = '';
  event.target.harga.value = '';
  hideModal();
  renderToHtml();
});

//show modal dengan cara
function showModal() {
  console.info('ddwdw');
  modal.style.display = 'flex';
  floating_button.style.backgroundColor = 'gray';
  floating_button.style.transform = 'rotate(45deg)';
}

//hide modal dengan cara
function hideModal() {
  modal.style.display = 'none';
  floating_button.style.backgroundColor = '#F280B6';
  floating_button.style.transform = 'rotate(0deg)';
}

// render function
function renderToHtml() {
  // clear element div
  root.innerHTML = '';
  // perulangan
  data_list_belanja.forEach((e, i) => {
    root.innerHTML += `
    <div class="card">
      <small> ${e.tanggal} </small>
      <div>
        ${e.nama_barang}  <span> Rp. ${e.harga_barang} </span>
      </div>
      <button onclick="handleDelete(${i})">Selesai</button>
    </div>
    `;
  });
}

// function delete item pada Array Data List Belanja
function handleDelete(index) {
  data_list_belanja.splice(index, 1);
  renderToHtml();
}
