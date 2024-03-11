import { useEffect, useState } from "react";
import styles from './ReposList.module.css';

const ReposList = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false)
                setRepos(resJson);
            }, 3000);
        })
    },[nomeUsuario])

    return(
        <div className="container">
        {estaCarregando ? (
            <h1>Carregando...</h1>
        ):(
            <ul className={styles.list}> 
            {repos.map(({id,name,languege,html_url}) => (
                <li key={id} className={styles.listItem}>
                    <div className={styles.itemName}>
                        <b>Nome:</b>{name} 
                    </div>
                    <div className={styles.itemLanguage}>
                        <b>Linguagem:</b>{languege} 
                    </div>
                    <a className={styles.itemLink} href={html_url} target="_blank">Visitar no site</a>
                </li>
            ))}
        </ul>
        )}
        </div>
    )
}

export default ReposList;