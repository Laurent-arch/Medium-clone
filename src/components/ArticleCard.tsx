import { NextPage } from "next";
import { useRouter } from "next/router";
import { Card, Text } from "@nextui-org/react";

interface Props {
    article: any
}

const ArticleCard: NextPage<Props> = ({article}) => {
    const router = useRouter();
  
    function getDate() { 
        return `posted on ${article.inserted_at.split('.')[0].substring(0, 10)}`
    }
    
    return (
        <Card
            isPressable
            css={{ mb: "$10" }}
            onPress={() => router.push("/article?id=" + article.id)}
        >
            <Card.Body>
                <Text h2>{article.title}</Text>
                <Text b>{getDate()}</Text>
                <Text b>By {article.user_email.toLowerCase()}</Text>
            </Card.Body>
        </Card>
    );
}

export default ArticleCard;