<template>
    <div id="subscription">
        <div class="subjumbo_bg">                
            <div class="subjumbo_text d-flex flex-column align-items-center text-center">   
                <div class="subjumbo_pin py-1">
                    <h2 class="py-3">Subscribe <span class="orangeletter">&</span> Receive a Free eBook</h2>
                    <span>Aliquam erat volutpat. Ut quis ligula a magna blandit finibus. Suspendisse maximus lacus non nunc lacinia lobortis.</span>                
                </div>
                <div class="d-flex py-5">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Insert your email...*">
                    <button class="border-0 text-uppercase">subscribe</button>
                </div>
                <span>Cras porttitor pellentesque sem eu pretium.</span>
            </div>    
        </div>
    </div>
</template>

<script>
import {store} from "../assets/data/store";
export default {
    name: "subscriptionComponent",
    setup () {
        

        return {store}
    }
}
</script>

<style lang="scss" scoped>
    #subscription{
    .subjumbo_bg{
        background-color: white;
        justify-content: center;
        display: flex;
        background-image: url(../assets/img/subscribe-sec-bg.png);
        background-size: cover;
        background-position: center;
        height: 650px;
       
        .subjumbo_text{
            padding: 2rem;
            width: 40%;
            margin: auto;
            h2{
                font-family: 'Playfair Display', serif;
            }
            .orangeletter{
                color: #fc7525;
            }
            input{
                width: 300px;
            }
            button{
                background-color: #fc7525;
                color: white;
                margin: 0 1rem;
                padding: 0.5rem 2rem;          
            }
        }
    }

}
</style>