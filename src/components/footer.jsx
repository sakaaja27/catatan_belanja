export default function Footer({items}) {
  if(items.length == 0) return  (
    <footer className="stats">
      Daftar belanja masih kosong 
    </footer>
  );
  const totalItem = items.length
  const checkedItems = items.filter((item) => item.checked).length
  const percentage = Math.round((checkedItems / totalItem) * 100)
  return (
    <footer className="stats">
      Ada {totalItem} barang di daftar belanjaan, {checkedItems} barang sudah dibeli ( {percentage} %)
    </footer>
  );
}