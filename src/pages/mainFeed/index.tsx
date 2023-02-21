import type { NextPage } from 'next';
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useState, useEffect } from "react";
import { Text } from "@nextui-org/react";
import ArticleCard from '@/components/ArticleCard';


const MainFeed: NextPage = () => {
    const supabaseClient = useSupabaseClient();
    const [articles, setArticles] = useState<any[]>([]);

    useEffect(() => {
        getArticles();
    }, []);

    const getArticles = async () => {
        try {
            const { data, error } = await supabaseClient
                .from("articles")
                .select("*")
                .limit(10)
            console.log(data);
            if (data != null) {
                setArticles(data);
            }
        } catch (error: any) {
            alert(error.message);
        }
    }

    
    return (
        <>
            <Text h2>Main Feed</Text>
            <Text size="$lg" css={{ my: "$8" }}>
                Check out articles from users here
            </Text>
           
            {articles.map((article) => (
                <ArticleCard article={article} />
            ))}
        </>
    )
}

export default MainFeed;
