INSERT INTO `condition_reglements`(`id`, `Condition_value`, `created_at`, `updated_at`) 
        VALUES  (null,"À réception",now(),now()),
                (null,"Fin de mois",now(),now()),
                (null,"10 jours",now(),now()),
                (null,"30 jours",now(),now()),
                (null,"30 jours fin de mois",now(),now()),
                (null,"45 jours fin de mois",now(),now()),
                (null,"60 jours",now(),now()),
                (null,"60 jours fin de mois",now(),now()),
                (null,"90 jours",now(),now()),
                (null,"90 jours fin de mois",now(),now()),
                (null,"120 jours",now(),now());

INSERT INTO `mode_reglements`(`id`, `mode_value`, `created_at`, `updated_at`) 
        VALUES  (null,"éspeces",now(),now()),
                (null,"Cheque",now(),now()),
                (null,"Virement Bancaire",now(),now()),
                (null,"Carte Bancaire",now(),now()),
                (null,"Paypal",now(),now()),
                (null,"Pélévement",now(),now()),
                (null,"Lettre de change",now(),now()),
                (null,"Lettre de change relevé",now(),now()),
                (null,"Lettre de change sans acception",now(),now()),
                (null,"Billet a ordre",now(),now());
                
INSERT INTO `interet_retards`(`id`, `inter_value`, `created_at`, `updated_at`) 
        VALUES  (null,"1% par mois",now(),now()),
                (null,"1,5% par mois",now(),now()),
                (null,"2% par mois",now(),now()),
                (null,"Taux d’intérêt légal en vigueur",now(),now());
      
INSERT INTO `type_articles`(`id`, `user_id`, `article_type_value`, `article_type_value_eng`, `created_at`, `updated_at`) 
      VALUES    (null,null,"Heures","Hours",Now(),Now()),
                (null,null,"Jours","days",Now(),Now()),
                (null,null,"Produits","Products",Now(),Now()),
                (null,null,"Services","Services",Now(),Now())