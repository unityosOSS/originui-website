import '@/assets/css/aurora.css'

export default function Aurora() {
  return (
    <div className="aurora">
        <div className="fixed inset-0 overflow-hidden z-[-1]">
            <div className="background absolute -inset-[10px] opacity-50"></div>
        </div>
    </div>
  );
}
