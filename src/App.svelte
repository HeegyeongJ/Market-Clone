<script>
  import Login from "./pages/Login.svelte";
  import Main from "./pages/Main.svelte";
  import Signup from "./pages/Signup.svelte";
  import Write from "./pages/Write.svelte";
  import Router, { loc } from 'svelte-spa-router';
  import NotFound from "./pages/NotFound.svelte";
  import "./css/style.css";
  import { user$ } from "./store";
  import { getAuth, GoogleAuthProvider, signInWithCredential, } from "firebase/auth";
  import Loading from "./pages/Loading.svelte";
  import { onMount } from "svelte";
    import MyPage from "./pages/MyPage.svelte";

  let isLoading = true; // 새로고침 할 때 로그인화면 보이지 않게

  const auth = getAuth();
  const checkLogin = async () => {
    const token = localStorage.getItem('token'); 
    if(!token) return isLoading = false;  
    const credential = GoogleAuthProvider.credential(null, token);
    const result = await signInWithCredential(auth, credential);
    const user = result.user;
    user$.set(user);
    isLoading = false;
  }

 const routes ={
  '/':Main,
  '/signup':Signup,
  '/write':Write,
  '/my':MyPage,
  '*':NotFound
}

  onMount(() => checkLogin());
</script>
{#if isLoading}
  <Loading></Loading>
{:else if !$user$}
  <Login/>
{:else}
  <Router routes={routes}/>
{/if}

<style>
  
</style>
