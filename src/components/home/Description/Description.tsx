import styles from './Description.module.sass';
import Image from 'next/image';

const PLACEHOLDER_IMAGE = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABXAFcDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAAMEBQIBBv/EAB0QAAICAwEBAQAAAAAAAAAAAAACAQMEITEREkH/xAAYAQEBAQEBAAAAAAAAAAAAAAADAgEABP/EABoRAQEBAQEBAQAAAAAAAAAAAAABAhExAxL/2gAMAwEAAhEDEQA/APhfDzwbKnMwPmpscwNQ5iBlcCjsPrgpSBVSlVaBbVkRB5MFEIeMgHCdRvBNZBdYhJbA2EaTSB60bAfouOpU5lSiVFsp5c167CfB1cHPg2qNjyjuVNKltSeiKF4aFKaJ0jx4tegavRWqaPHTQNjusu5CG5TWvUzciOl5cz36B0/QF67imYFONmRTyeXL1OP0dV0R7sdVOx81Go0ceOGlRGjNx54adE6NoNKlU8ddHaHj8DqEGRGpMrJg1sj9MnKnp0VGdZ0As6BXVmywp2OJcWzhyFmnf1sfSxF9Dqm2JFNfHbhp0MYuO5o02HWi1Gor6B30SrZoHs0SKwvIYyslult79M3Ibp0dElk7A4snYFcb1NNhxLk/2efZv5ZnamHG1vsihh1bGV6c3rVosLqrTHqcsqsDtbY1VtPWt0QrYE2aM6HUNus9ILmGWOS2sJkVKedgcNICcT1l+nvoAXR49dLI5JAAtPd81VclVcgAFMcrHsyAGQOinkRZIAPl59EyAAIKv//Z'

export const Description = () => {
    return(
        <section className={styles.Description}>
            <div className={styles.Description__imageContainer}>
            <Image
                src="/images/description.jpeg" 
                alt="products marketplace" 
                fill
                placeholder='blur'
                blurDataURL={PLACEHOLDER_IMAGE}
            />
            </div>
        <div className={styles.Description__text}> 
            <h2>Description</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt possimus iusto harum, quam maiores sapiente? Harum vero assumenda quae! Iste ducimus quae tempore cupiditate itaque autem corporis laboriosam officia maiores.</p>
        </div>
        </section>
    )
}