
export default function AdminLayout(props) {
    return (
        <div className="w-screen h-screen bg-gray-100">
            <div className="container mx-auto h-screen">
                {props.children}
            </div>
        </div>
    );
}