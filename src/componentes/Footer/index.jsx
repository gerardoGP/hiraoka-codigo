import "./Footer2.css"
const Footer = () => {
return (
    <footer className="bg-dark">
        <div class="footer-content">
            <h3>HIRAOKA</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate sequi natus, labore, temporibus enim provident perferendis fugiat quod illo impedit maxime cum animi esse repellendus placeat tenetur similique, quis dolor.</p>
            <ul class="socials">
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
            </ul>
        </div>
        <div class="footer-bottom">
            <p>copyright &copy;2022 <a href="#">Los Magnificos</a></p>
        </div>
    </footer>
)
}
export default Footer