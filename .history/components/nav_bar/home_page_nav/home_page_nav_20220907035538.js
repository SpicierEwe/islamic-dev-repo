export default function HomePageNav(props) {





    return(
        return (
            <header className={styles.header_bg}>
              <div className={styles.header}>
                {/* main title */}
                <div className={styles.heading_container}>
                  <div className={styles.logo}>
                    <Link href={"/"}>
                      <Image
                        src={"/images/logo/logo.svg"}
                        width="50%"
                        height="50%"
                        alt="logo_img"
                      ></Image>
                    </Link>
                  </div>
        
                  <div className={styles.heading_titles}>
                    <h1>{page_title}</h1>
                    <div className={styles.resource_count_container}>
                      <h3>{resources_count.toString().replaceAll(",", "")}</h3>
                      <p>resources available</p>
                    </div>
                  </div>
                </div>
                {props.children}
              </div>
            </header>
          );
    )
}