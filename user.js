//1 โหลด user จากapi ที่โหลดมาแสดงในหน้าเว็บ

//2 นำ user มาโหลดในหน้เว็บ 

window.onload = async () => {
    // 1 load user data จาก api 
    const response = axios.get('http://localhost:8000/users');
    console.log('respons.data', response.data);

    let htmlData = '';

    htmlData = <div> ;
        let i = 0; <response.data.forEach(user => i++) {
            htmlData += `<div class="user-card">
                <h3>${user.firstName} ${user.lastName}</h3>
                <p>Age: ${user.age}</p>
                <p>Gender : ${user.gender}</p>
                <p>Interests : ${user.interests}</p>
                <p>Description : ${user.description}</p>
            </div>`; 
        }          

        delete button.addEventListener('click', async () => {
            try {
                const response = await axios.delete(`http://localhost:8000/users/${user.id}`); 
                
                for (let i = 0; i < userDOM.children.length; i++) {
                    const child = userDOM.children[i];
                    if (child.querySelector('h3').innerText === `${user.firstName} ${user.lastName}`) {
                        userDOM.removeChild(child);
                    }
                }
            } catch (error) {
                console.error('Error deleting user:', error);
                // ดึง id ของ user ที่ต้องการลบมาใช้ในการลบข้อมูลจาก api และอัพเดตหน้าเว็บ
            }
            await axiox.delete(`http://localhost:8000/users/${user.id}`);
        });

userDOM.innerHTML = htmlData;

const loaddata = async (params) => {
    try {
        const response = await axios.get('http://localhost:8000/users', params);
        console.log('response.data', response.data);    

    } catch (error) {
        console.error('Error loading data:', error);
    }   
}